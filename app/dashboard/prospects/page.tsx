'use client';

import { useState } from 'react';

interface Prospect {
  id: string;
  name: string;
  position: string;
  school: string;
  year: string;
  score: number;
  status: 'new' | 'contacted' | 'engaged' | 'committed';
}

const statusColors: Record<string, string> = {
  new: '#3b82f6',
  contacted: '#eab308',
  engaged: '#16b364',
  committed: '#a855f7',
};

const mockProspects: Prospect[] = [];

export default function ProspectsPage() {
  const [prospects] = useState<Prospect[]>(mockProspects);
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState({ name: '', position: '', school: '', year: '2026' });

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Prospects</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Manage your recruiting pipeline and track prospect engagement.
          </p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Prospect
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search prospects..."
          className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm outline-none placeholder:text-zinc-600 focus:border-[#16b364]/50"
        />
        {['All', 'New', 'Contacted', 'Engaged', 'Committed'].map((filter) => (
          <button
            key={filter}
            className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table / Empty state */}
      {prospects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.06] py-20 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16b364]/10">
            <svg className="h-7 w-7 text-[#16b364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">No prospects yet</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Add your first prospect manually or import a CSV file to get started.
            AI will automatically research and score each prospect.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => setShowAddModal(true)} className="btn-primary">
              Add Manually
            </button>
            <button className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.05]">
              Import CSV
            </button>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">School</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">AI Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {prospects.map((prospect) => (
                <tr key={prospect.id} className="border-b border-white/[0.06] transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 text-sm font-medium">{prospect.name}</td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{prospect.position}</td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{prospect.school}</td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{prospect.year}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-[#16b364]"
                          style={{ width: `${prospect.score}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-400">{prospect.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                      style={{
                        color: statusColors[prospect.status],
                        backgroundColor: `${statusColors[prospect.status]}15`,
                      }}
                    >
                      {prospect.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/[0.06] bg-[#141414] p-6">
            <h2 className="text-lg font-semibold">Add Prospect</h2>
            <p className="mt-1 text-sm text-zinc-400">AI will automatically research and score this prospect.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-300">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-[#16b364]/50"
                  placeholder="John Smith"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-300">Position</label>
                  <input
                    type="text"
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-[#16b364]/50"
                    placeholder="QB"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-300">Class Year</label>
                  <select
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-[#16b364]/50"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-300">School</label>
                <input
                  type="text"
                  value={form.school}
                  onChange={(e) => setForm({ ...form, school: e.target.value })}
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-[#16b364]/50"
                  placeholder="Mountain View High School"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.05]"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="btn-primary"
              >
                Add Prospect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
