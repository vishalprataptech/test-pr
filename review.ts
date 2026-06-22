import { inngest } from "@/features/inngest/client";
import {db } from "@/src/index";
import {
    buildRepoNamespace,
    chunkRepoFiles,
    deleteRepoNamespace,
    getRepoFiles,
    saveRepoChunks,
} from "./repo-sync";
imp
  .returning();
        });

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

            import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/index"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/src/db/schema";
export const auth = betterAuth({
   database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema,
    }),
     socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 

       mapProfileToUser:async(profile)=>({
        email:profile.email ?? `${profile.id}@users.noreply.github.com`,
        name:profile.name ?? profile.login,
      })
    }, 
  }, 
   plugins: [nextCookies()] // make sure this is the last plugin in the array 
});