import { inngest } from "@/features/inngest/client";
import {db } from "@/src/index";
import {
    buildRepoNamespace,
    chunkRepoFiles,
    deleteRepoNamespace,
    getRepoFiles,
    saveRepoChunks,
} from "./repo-sync";
import { eq } from "drizzle-orm";
import {repoSync} from "@/src/db/schema"


export const syncRepoCodebaseFunction = inngest.createFunction({
    id: "sync-repo-codebas",
    triggers: { event: "repo/sync.requested" },
    onFailure: async ({ event }) => {
    await db
  .update(repoSync)
  .set({
    status: "failed",
  })
  .where(eq(repoSync.id, event.data.event.data.repoSyncId));
    }
},

    async ({ event, step }) => {
        const repoSyncId = event.data.repoSyncId;

        const syncRepo = await step.run("mark-syncing", async () => {
        return db
  .update(repoSync)
  .set({
    status: "syncing",
  })
  .where(eq(repoSync.id, repoSyncId))
  .returning();
        });


        const chunks = await step.run("fetch-and-chunk-codebase", async () => {

            const repoSyncRecord = await db.query.repoSync.findFirst({
  where: eq(repoSync.id, repoSyncId),
});

if (!repoSyncRecord) {
  throw new Error("Repo sync not found");
}

            const files = await getRepoFiles(
                repoSyncRecord.installationId,
                repoSyncRecord.repoFullName,
                repoSyncRecord.branch
            )

            return chunkRepoFiles(files);
        });

                    const repoSyncRecord = await db.query.repoSync.findFirst({
  where: eq(repoSync.id, repoSyncId),
});

if (!repoSyncRecord) {
  throw new Error("Repo sync not found");
}

        const namespace = buildRepoNamespace(repoSyncRecord.repoFullName);

        if (repoSyncRecord.syncedAt) {
            await step.run("delete-old-vectors", async () => {
                await deleteRepoNamespace(namespace);
            })
        }

        await step.run("save-vectors-to-pinecone", async () => {
            await saveRepoChunks(namespace, chunks);
        });


        await step.run("mark-synced", async () => {
          await db
  .update(repoSync)
  .set({
    status: "synced",
    syncedAt: new Date(),
    chunkCount: chunks.length,
  })
  .where(eq(repoSync.id, repoSyncId));
        });


        return {
            repoSyncId,
            status: "synced",
            chunkCount: chunks.length,
        }
    }
)