'use client';

import { useAuth } from '@/lib/auth-context';

const stats = [
  { label: 'Total Prospects', value: '0', change: null },
  { label: 'Active Campaigns', value: '0', change: null },
  { label: 'Response Rate', value: '—', change: null },
  { label: 'Meetings Booked', value: '0', change: null },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          Welcome{user?.displayName ? `, ${user.displayName}` : ''}
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Here&apos;s an overview of your recruiting pipeline.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <div className="text-sm text-zinc-400">{stat.label}</div>
            <div className="mt-2 text-3xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.06] py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16b364]/10">
          <svg className="h-7 w-7 text-[#16b364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Get started with EndZoneAI</h3>
        <p className="mt-2 max-w-md text-sm text-zinc-400">
          Add your first prospects to start building your recruiting pipeline.
          Our AI agents will help you research, score, and engage them automatically.
        </p>
        <a
          href="/dashboard/prospects"
          className="btn-primary mt-6"
        >
          Add Prospects
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <p className="text-sm text-zinc-500">No activity yet. Start by adding prospects to your pipeline.</p>
        </div>
      </div>
    </div>
  );
}
