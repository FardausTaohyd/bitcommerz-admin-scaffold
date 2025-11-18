import React, { useState } from 'react'
import { Menu as MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MODULES } from './modules'

export default function Sidebar({ collapsed, onToggleCollapse }) {
  const [open, setOpen] = useState(new Set())
  const toggle = (id) => {
    const next = new Set(open)
    if (next.has(id)) next.delete(id); else next.add(id)
    setOpen(next)
  }
  return (
    <aside className={`min-h-screen bg-slate-800 text-slate-200 ${collapsed ? 'w-20' : 'w-72'} transition-all duration-200`} aria-label="Main sidebar">
      <div className="px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded-md" aria-hidden></div>
          {!collapsed && <div>
            <div className="text-lg font-semibold">BitCommerz</div>
            <div className="text-xs text-slate-300">Admin Panel</div>
          </div>}
        </div>
        <button onClick={onToggleCollapse} className="p-2 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500" aria-label="Toggle sidebar">
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      <nav className="px-2 pb-8">
        {MODULES.map(m => (
          <div key={m.id}>
            <button
              onClick={() => toggle(m.id)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-700 focus:outline-none ${open.has(m.id) ? 'bg-slate-700' : ''}`}
            >
              <div className="flex items-center">
                <span className="inline-block w-2 h-6 bg-sky-400 mr-3 rounded" aria-hidden />
                <span className="font-medium">{m.label}</span>
              </div>
              <div className="opacity-70">{(m.items && m.items.length) ? '▾' : ''}</div>
            </button>

            {open.has(m.id) && m.items && (
              <div className="pl-8 border-l border-slate-600">
                {m.items.map(sub => (
                  <div key={sub.id}>
                    <Link to={`/${m.id}/${sub.id}`} className="block px-4 py-2 hover:bg-slate-800 text-sm text-slate-100">{sub.label}</Link>
                    {sub.children && (
                      <div className="pl-4">
                        {sub.children.map(ch => (
                          <Link key={ch.id} to={`/${m.id}/${sub.id}/${ch.id}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">{ch.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto px-4 py-6 text-xs text-slate-400">
        <div>Version 1.0 • Production-ready UI scaffold</div>
      </div>
    </aside>
  )
}
