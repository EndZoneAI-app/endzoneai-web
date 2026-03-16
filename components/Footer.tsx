const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#' },
    { label: 'Integrations', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* CTA */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your{' '}
            <span className="gradient-text">Recruiting?</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Join hundreds of sports organizations already using EndZoneAI to win.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:hello@endzoneai.app" className="btn-primary">
              Start Free Trial
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#features" className="btn-secondary">Explore Features</a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-12 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#16b364] to-[#0a9150]">
              <span className="text-[10px] font-bold text-white">E</span>
            </div>
            <span className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} EndZoneAI. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            Powered by
            <a href="https://cosmotion.ai" className="ml-1 text-zinc-400 transition-colors hover:text-white">
              CosmotionAI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
