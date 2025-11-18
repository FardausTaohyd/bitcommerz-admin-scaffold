import React from 'react'
export default function Section({title, children}) {
  return (
    <section className="bg-slate-800 rounded p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </section>
  )
}
