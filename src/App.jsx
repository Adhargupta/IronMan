import { useState } from 'react'
import LeftSidebar from './components/dashboard/LeftSidebar'
import MainContent from './components/dashboard/MainContent'
import RightSidebar from './components/dashboard/RightSidebar'
import MusicPlayer from './components/dashboard/MusicPlayer'
import './App.css'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0b0b0b] overflow-hidden font-body">
      {/* Main 3-column layout */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Mobile sidebar overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-20 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar - hidden on mobile unless open */}
        <div
          className={`
            fixed lg:relative inset-y-0 left-0 z-30 lg:z-auto
            transform transition-transform duration-300 ease-in-out
            ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <LeftSidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>

        {/* Main content */}
        <MainContent onMenuOpen={() => setMobileSidebarOpen(true)} />

        {/* Right sidebar - hidden on tablets and smaller */}
        <div className="hidden xl:flex">
          <RightSidebar />
        </div>
      </div>

      {/* Bottom player */}
      <MusicPlayer />
    </div>
  )
}

export default App
