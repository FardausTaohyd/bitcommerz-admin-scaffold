import React from 'react'
export default function Card({title, value}) {
  return (
    <div className="bg-slate-800 p-4 rounded shadow-sm">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  )
}
