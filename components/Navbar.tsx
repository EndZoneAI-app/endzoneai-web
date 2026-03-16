'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Platform', href: '#platform' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#16b364] to-[#0a9150]">
            <span className="text-sm font-bold text-white">E</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            EndZone<span className="text-[#16b364]">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden gap-3 md:flex">
          <a href="#" className="btn-secondary">Sign In</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:bg-white/[0.03] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-3 justify-center" onClick={() => setMobileOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
