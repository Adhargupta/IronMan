import { useState } from 'react'
import { Play, Pause, Heart, MoreHorizontal, Users, TrendingUp } from 'lucide-react'

const upNext = [
  { title: 'Stardust Protocol', artist: 'Auric Field', duration: '4:02', color: '#a78bfa' },
  { title: 'Solar Drift', artist: 'Pulse Engine', duration: '3:55', color: '#34d399' },
  { title: 'Chrome Haze', artist: 'Synth Collective', duration: '5:17', color: '#fbbf24' },
  { title: 'Redline Theory', artist: 'Reflex Arc', duration: '3:29', color: '#f472b6' },
]

const topArtists = [
  { name: 'Nova Signal', listeners: '4.2M', rank: 1, color: '#ff6a3d' },
  { name: 'Dark Matter', listeners: '3.8M', rank: 2, color: '#a78bfa' },
  { name: 'Auric Field', listeners: '2.9M', rank: 3, color: '#34d399' },
  { name: 'Synth Collective', listeners: '2.1M', rank: 4, color: '#fbbf24' },
  { name: 'Reflex Arc', listeners: '1.7M', rank: 5, color: '#f472b6' },
]

const statsData = [
  { label: 'Tracks Played', value: '1,284', icon: TrendingUp, trend: '+18%' },
  { label: 'Hours Listened', value: '87.4', icon: Users, trend: '+6%' },
]

function QueueItem({ track, index }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: track.color + '22' }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: track.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-medium text-[13px] text-white truncate">{track.title}</p>
        <p className="font-body text-[11px] text-[#9ca3af] truncate">{track.artist}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[11px] text-[#9ca3af]/60 font-body">{track.duration}</span>
        <button
          onClick={() => setPlaying(!playing)}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
        >
          {playing
            ? <Pause size={14} strokeWidth={2.5} className="text-[#ff6a3d]" />
            : <Play size={14} strokeWidth={2.5} className="text-[#9ca3af] hover:text-white" />
          }
        </button>
      </div>
    </div>
  )
}

function ArtistRow({ artist }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-all duration-200 cursor-pointer group">
      <span className="text-[11px] text-[#9ca3af]/50 font-body font-medium w-4 flex-shrink-0">
        {artist.rank}
      </span>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-[12px] text-white"
        style={{ backgroundColor: artist.color + '44' }}
      >
        {artist.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-medium text-[13px] text-white truncate group-hover:text-[#ff6a3d] transition-colors duration-200">
          {artist.name}
        </p>
        <p className="font-body text-[11px] text-[#9ca3af]">{artist.listeners} listeners</p>
      </div>
      <MoreHorizontal
        size={15}
        strokeWidth={2}
        className="text-[#9ca3af]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
      />
    </div>
  )
}

export default function RightSidebar() {
  return (
    <aside className="w-[280px] xl:w-[300px] flex-shrink-0 flex flex-col h-full bg-[#111111] border-l border-white/5 overflow-y-auto">
      <div className="p-5 space-y-7">
        {/* Stats cards */}
        <section>
          <h3 className="font-heading font-semibold text-[16px] text-white mb-3">Your Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            {statsData.map(({ label, value, icon: Icon, trend }) => (
              <div
                key={label}
                className="bg-[#161616] rounded-xl p-4 border border-white/5 hover:border-[#ff6a3d]/20 transition-colors duration-200"
              >
                <Icon size={16} strokeWidth={2} className="text-[#ff6a3d] mb-2" />
                <p className="font-heading font-bold text-white text-[20px] leading-none">{value}</p>
                <p className="font-body text-[11px] text-[#9ca3af] mt-1">{label}</p>
                <span className="inline-block mt-2 text-[10px] font-body font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">
                  {trend}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Activity chart */}
        <section>
          <h3 className="font-heading font-semibold text-[16px] text-white mb-3">Weekly Activity</h3>
          <div className="bg-[#161616] rounded-xl p-4 border border-white/5">
            <div className="flex items-end justify-between gap-1.5 h-20">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm transition-all duration-300 hover:opacity-90"
                    style={{
                      height: `${h}%`,
                      background: i === 5
                        ? 'linear-gradient(to top, #ff6a3d, #ff9a7d)'
                        : `rgba(255,106,61,${0.15 + h / 400})`,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className="flex-1 text-center font-body text-[10px] text-[#9ca3af]/50">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Top Artists */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-semibold text-[16px] text-white">Top Artists</h3>
            <button className="font-body text-[12px] text-[#9ca3af] hover:text-[#ff6a3d] transition-colors duration-200">
              See all
            </button>
          </div>
          <div className="bg-[#161616] rounded-xl border border-white/5">
            {topArtists.map((artist, i) => (
              <div key={artist.name}>
                <ArtistRow artist={artist} />
                {i < topArtists.length - 1 && <div className="h-px bg-white/3 mx-3" />}
              </div>
            ))}
          </div>
        </section>

        {/* Up Next Queue */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-semibold text-[16px] text-white">Up Next</h3>
            <button className="font-body text-[12px] text-[#9ca3af] hover:text-[#ff6a3d] transition-colors duration-200">
              Clear
            </button>
          </div>
          <div className="bg-[#161616] rounded-xl border border-white/5">
            {upNext.map((track, i) => (
              <div key={track.title}>
                <QueueItem track={track} index={i} />
                {i < upNext.length - 1 && <div className="h-px bg-white/3 mx-3" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
