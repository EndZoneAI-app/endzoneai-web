'use client';

import { useState } from 'react';

const campaignTemplates = [
  { name: 'Initial Contact', description: 'First outreach to new prospects with personalized intro', channels: ['Email'] },
  { name: 'Follow-Up Sequence', description: '3-touch follow-up for non-responsive prospects', channels: ['Email', 'SMS'] },
  { name: 'Event Invitation', description: 'Invite prospects to camps, visits, or virtual events', channels: ['Email'] },
  { name: 'Commitment Nurture', description: 'Keep committed prospects engaged and informed', channels: ['Email', 'SMS'] },
];

export default function OutreachPage() {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'templates'>('campaigns');

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Outreach</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Create and manage automated outreach campaigns powered by AI.
          </p>
        </div>
        <button className="btn-primary">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Campaign
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-1">
        {(['campaigns', 'templates'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-colors ${
              activeTab === tab ? 'bg-white/[0.06] text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'campaigns' ? (
        /* Active Campaigns — Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.06] py-20 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16b364]/10">
            <svg className="h-7 w-7 text-[#16b364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">No active campaigns</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Create your first outreach campaign. AI will draft personalized messages
            for each prospect and handle follow-ups automatically.
          </p>
          <button className="btn-primary mt-6">Create First Campaign</button>
        </div>
      ) : (
        /* Templates */
        <div className="grid gap-4 sm:grid-cols-2">
          {campaignTemplates.map((template) => (
            <div
              key={template.name}
              className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-[#16b364]/30 hover:bg-white/[0.03]"
            >
              <h3 className="font-semibold">{template.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{template.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {template.channels.map((channel) => (
                  <span
                    key={channel}
                    className="rounded-md bg-white/[0.03] px-2 py-1 text-xs text-zinc-500 ring-1 ring-white/[0.06]"
                  >
                    {channel}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-sm font-medium text-[#16b364] opacity-0 transition-opacity group-hover:opacity-100">
                Use Template &rarr;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
