import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EndZoneAI — AI-Powered Sports Intelligence',
  description:
    'GTM and outreach automation platform for sports organizations. AI-driven market analysis, engagement, and recruitment powered by CosmotionAI.',
  openGraph: {
    title: 'EndZoneAI — AI-Powered Sports Intelligence',
    description:
      'Transform your sports organization with AI-powered outreach, market analysis, and recruitment automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
