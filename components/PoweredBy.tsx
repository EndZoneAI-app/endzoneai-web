export default function PoweredBy() {
  return (
    <section id="platform" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16b364]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Infrastructure</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Powered by{' '}
            <span className="bg-gradient-to-r from-[#7a26ff] to-[#3b82f6] bg-clip-text text-transparent">
              CosmotionAI
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            EndZoneAI is built on the CosmotionAI platform — enterprise-grade AI orchestration,
            security risk scoring, and governance infrastructure trusted across industries.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Secure AI Orchestration',
              description: 'Policy-governed agent workflows ensure every AI action is validated and auditable.',
            },
            {
              title: 'SAI Risk Scoring',
              description: 'Real-time DEFCON-style risk tiers protect your data and ensure compliance.',
            },
            {
              title: 'Zero-Trust Security',
              description: 'End-to-end encryption, RBAC, and continuous monitoring for enterprise-grade protection.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7a26ff]/20 to-[#3b82f6]/20 ring-1 ring-white/[0.06]">
                <svg className="h-5 w-5 text-[#7a26ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://cosmotion.ai"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white"
          >
            Learn more about CosmotionAI
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
