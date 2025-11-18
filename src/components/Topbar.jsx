import React from 'react'

export default function Topbar(){
  return (
    <header className="w-full flex items-center justify-between bg-slate-900 px-6 py-3 border-b border-slate-700">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500" aria-label="open search">
          <span>🔎</span>
        </button>
        <div className="hidden md:block">
          <input placeholder="Search..." className="px-3 py-2 rounded bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="notifications" className="p-2 rounded hover:bg-slate-800">🔔</button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-700 rounded-full" aria-hidden />
          <div className="text-sm">আপনি</div>
        </div>
      </div>
    </header>
  );
}
