

import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 backdrop-blur-lg sticky top-0 z-50 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            AI<span className="text-cyan-400">Nova</span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </div>

          <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              ✨ Powered by Advanced AI Models
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Faster With
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
              Automate workflows, generate content, analyze data, and scale your
              business using next-generation AI tools.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold transition">
                Start Free Trial
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-24">
            <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-2xl p-5">
                  <h3 className="font-semibold mb-4">AI Chat</h3>
                  <div className="space-y-3">
                    <div className="bg-cyan-500/20 p-3 rounded-lg">
                      Generate marketing copy
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      AI generated response...
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5">
                  <h3 className="font-semibold mb-4">Analytics</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Performance</span>
                        <span>92%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full">
                        <div className="h-3 bg-cyan-400 rounded-full w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Automation</span>
                        <span>86%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full">
                        <div className="h-3 bg-purple-500 rounded-full w-[86%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5">
                  <h3 className="font-semibold mb-4">Tasks Completed</h3>

                  <div className="text-5xl font-bold text-cyan-400">12.4K</div>

                  <p className="text-green-400 mt-2">
                    +28% growth this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Everything You Need In One Platform
            </h2>

            <p className="text-gray-400 mt-4">
              Powerful AI tools designed to increase productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              "AI Chat Assistant",
              "Workflow Automation",
              "Content Generation",
              "Advanced Analytics",
            ].map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/50 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <h3 className="mt-4 text-xl font-semibold">{feature}</h3>

                <p className="mt-3 text-gray-400">
                  Leverage AI to automate repetitive tasks and boost efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Starter", price: "$19" },
              { name: "Pro", price: "$49" },
              { name: "Enterprise", price: "$99" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>

                <div className="text-5xl font-bold mt-6">
                  {plan.price}
                  <span className="text-lg text-gray-400">/mo</span>
                </div>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Unlimited AI Requests</li>
                  <li>✓ Team Collaboration</li>
                  <li>✓ Advanced Analytics</li>
                  <li>✓ Priority Support</li>
                </ul>

                <button className="w-full mt-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Supercharge Your Workflow?
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Join thousands of teams already using AI to automate and scale.
          </p>

          <button className="mt-10 px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold transition">
            Start Free Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default App
