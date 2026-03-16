const steps = [
  {
    number: '01',
    title: 'Connect Your Data',
    description:
      'Import your existing prospect lists, CRM data, and organizational information. EndZoneAI integrates with the tools you already use.',
  },
  {
    number: '02',
    title: 'AI Builds Your Pipeline',
    description:
      'Our AI agents analyze your targets, research prospects, score fit potential, and prioritize your outreach list automatically.',
  },
  {
    number: '03',
    title: 'Automated Engagement',
    description:
      'Launch personalized multi-channel campaigns. AI drafts messages, schedules follow-ups, and adapts based on prospect responses.',
  },
  {
    number: '04',
    title: 'Measure & Optimize',
    description:
      'Track every interaction with real-time analytics. The platform continuously learns from outcomes to improve future campaigns.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From Setup to Results in Minutes
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Get up and running quickly. EndZoneAI handles the complexity so your team
            can focus on building winning relationships.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-6 translate-x-full bg-gradient-to-r from-[#16b364]/40 to-transparent lg:block" />
              )}

              <div className="glass-card rounded-2xl p-6">
                <div className="mb-4 font-mono text-3xl font-light text-[#16b364]">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
