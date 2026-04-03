import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { Home } from './pages/Home'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col bg-app-surface font-sans text-gray-900 antialiased">
      <Header onMenuClick={() => setMobileNavOpen(true)} />

      <div className="flex min-h-0 flex-1">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-16 z-[35] bg-black/45 backdrop-blur-[1px] lg:hidden"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}

        <Sidebar
          mobileOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <Home />
        </div>
      </div>
    </div>
  )
}
