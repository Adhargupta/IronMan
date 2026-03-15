import {
  Home,
  ListMusic,
  BarChart2,
  Heart,
  Clock,
  History,
  Mic,
  Music,
  Plus,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Feed', active: true },
  { icon: ListMusic, label: 'Playlists' },
  { icon: BarChart2, label: 'Statistics' },
]

const musicItems = [
  { icon: Heart, label: 'Favourites' },
  { icon: Clock, label: 'Listen Later' },
  { icon: History, label: 'History' },
  { icon: Mic, label: 'Podcasts' },
]

const playlists = [
  { label: 'Metalcore', count: 24 },
  { label: 'Electro', count: 18 },
  { label: 'Funk', count: 31 },
  { label: 'Disco', count: 12 },
]

const playlistColors = ['#ff6a3d', '#a78bfa', '#34d399', '#fbbf24']

export default function LeftSidebar({ collapsed, onToggle }) {
  return (
    <aside
      className={`
        flex flex-col h-full bg-[#111111] transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[70px]' : 'w-[240px]'}
        border-r border-white/5
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent-primary flex items-center justify-center shadow-lg shadow-[#ff6a3d]/20">
          <Music size={18} className="text-white" strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <span className="font-heading font-bold text-white text-[17px] tracking-tight truncate">
            Music Academy
          </span>
        )}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 pb-4 space-y-6">
        {/* Main Nav */}
        <nav>
          {!collapsed && (
            <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/60 font-body">
              Menu
            </p>
          )}
          <ul className="space-y-1">
            {navItems.map(({ icon: Icon, label, active }) => (
              <li key={label}>
                <button
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
                    ${active
                      ? 'bg-[#ff6a3d]/10 text-[#ff6a3d]'
                      : 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon
                    size={19}
                    strokeWidth={active ? 2.5 : 2}
                    className={`
                      flex-shrink-0 transition-transform duration-200
                      ${active ? 'text-[#ff6a3d]' : 'group-hover:scale-110'}
                    `}
                  />
                  {!collapsed && (
                    <span className="font-body text-[14px] font-medium truncate">{label}</span>
                  )}
                  {!collapsed && active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff6a3d]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Your Music */}
        <nav>
          {!collapsed && (
            <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/60 font-body">
              Your Music
            </p>
          )}
          <ul className="space-y-1">
            {musicItems.map(({ icon: Icon, label }) => (
              <li key={label}>
                <button
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#9ca3af] hover:text-white hover:bg-white/5 transition-all duration-200 group"
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  />
                  {!collapsed && (
                    <span className="font-body text-[14px] font-medium truncate">{label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Your Playlists */}
        <nav>
          {!collapsed && (
            <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/60 font-body">
              Your Playlists
            </p>
          )}
          <ul className="space-y-1">
            {playlists.map(({ label, count }, i) => (
              <li key={label}>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#9ca3af] hover:text-white hover:bg-white/5 transition-all duration-200 group">
                  <span
                    className="flex-shrink-0 w-[19px] h-[19px] rounded-md"
                    style={{ backgroundColor: playlistColors[i % playlistColors.length] + '33' }}
                  >
                    <span
                      className="flex w-full h-full items-center justify-center rounded-md"
                      style={{ color: playlistColors[i % playlistColors.length] }}
                    >
                      <Music size={11} strokeWidth={2.5} />
                    </span>
                  </span>
                  {!collapsed && (
                    <>
                      <span className="font-body text-[14px] font-medium truncate">{label}</span>
                      <span className="ml-auto text-[11px] text-[#9ca3af]/50 group-hover:text-[#9ca3af]">
                        {count}
                      </span>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Create new playlist */}
          {!collapsed && (
            <button className="mt-3 w-full flex items-center gap-2 px-3 py-2.5 rounded-xl border border-dashed border-white/10 text-[#9ca3af] hover:text-[#ff6a3d] hover:border-[#ff6a3d]/40 transition-all duration-200 group">
              <Plus
                size={16}
                strokeWidth={2.5}
                className="flex-shrink-0 transition-transform duration-200 group-hover:rotate-90"
              />
              <span className="font-body text-[13px] font-medium">Create new playlist</span>
            </button>
          )}
        </nav>
      </div>

      {/* Collapse toggle */}
      <div className="px-3 py-4 border-t border-white/5">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-[#9ca3af] hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <ChevronRight
            size={18}
            strokeWidth={2}
            className={`transition-transform duration-300 ${collapsed ? '' : 'rotate-180'}`}
          />
          {!collapsed && <span className="font-body text-[13px] font-medium">Collapse</span>}
        </button>
      </div>
    </aside>
  )
}
