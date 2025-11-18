import React, { useState, useMemo } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import GenericListPage from './components/GenericListPage'
import { MODULES } from './components/modules'

export default function BitCommerzAdminApp(){
  const [collapsed, setCollapsed] = useState(false);
  const sampleItems = useMemo(() => [
    {name: 'Item A', meta: 'Meta A'},
    {name: 'Item B', meta: 'Meta B'},
  ], []);

  return (
    <HashRouter>
      <div className="min-h-screen flex bg-slate-900 text-slate-100">
        <Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed(x => !x)} />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              {MODULES.flatMap(m => (
                (m.items && m.items.length > 0) ? m.items.map(sub => (
                  <Route key={`${m.id}-${sub.id}`} path={`/${m.id}/${sub.id}`} element={<GenericListPage title={`${m.label} - ${sub.label}`} items={sampleItems} />} />
                )) : []
              ))}

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  )
}
