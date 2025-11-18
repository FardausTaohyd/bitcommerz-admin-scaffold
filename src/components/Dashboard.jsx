import React from 'react'
import Card from './Card'
import Section from './Section'

export default function Dashboard(){
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Projects" value="128" />
        <Card title="Pending Tasks" value="24" />
        <Card title="Today Sales" value="৳ 45,120" />
      </div>

      <Section title="Recent Activities">
        <ul className="space-y-2">
          <li className="flex items-center justify-between bg-slate-800 px-4 py-3 rounded">New Purchase Order <span className="text-slate-400">2 hours ago</span></li>
          <li className="flex items-center justify-between bg-slate-800 px-4 py-3 rounded">Salary processed <span className="text-slate-400">Yesterday</span></li>
        </ul>
      </Section>
    </div>
  )
}
