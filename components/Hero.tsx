export default function Hero() {
  return (
    <section className="gradient-bg relative min-h-screen overflow-hidden">
      {/* Orbs */}
      <div
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#16b364] opacity-[0.15] blur-[100px]"
        style={{ animation: 'gradient-shift 8s ease-in-out infinite' }}
      />
      <div
        className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#06b6d4] opacity-[0.1] blur-[100px]"
        style={{ animation: 'gradient-shift 10s ease-in-out infinite 2s' }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pb-32 pt-40 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16b364]" />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            AI-Powered Sports Intelligence
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Recruit Smarter.{' '}
          <span className="gradient-text">Engage Faster.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          EndZoneAI transforms how sports organizations discover talent, automate outreach,
          and build relationships — powered by enterprise-grade AI infrastructure.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary">
            Start Free Trial
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="#features" className="btn-secondary">
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: '10x', label: 'Faster Outreach' },
            { value: '85%', label: 'Response Rate' },
            { value: '500+', label: 'Organizations' },
            { value: '24/7', label: 'AI Automation' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
