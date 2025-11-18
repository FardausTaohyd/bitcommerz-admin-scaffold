import React from 'react'
export default function GenericListPage({title, items}) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-slate-800 rounded divide-y divide-slate-700">
        {items.map((it, i) => (
          <div key={i} className="px-4 py-3 flex items-center justify-between">
            <div>{it.name}</div>
            <div className="text-slate-400 text-sm">{it.meta}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
