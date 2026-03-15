import { useState } from 'react'
import { Play, Pause, Heart, MoreHorizontal, TrendingUp, Clock, Flame, Menu } from 'lucide-react'

const featuredTrack = {
  title: 'Neon Shadows',
  artist: 'Synth Collective',
  album: 'Future Nostalgia',
  duration: '4:23',
  plays: '2.4M',
  gradient: 'from-[#ff6a3d]/30 via-[#a78bfa]/20 to-transparent',
}

const trending = [
  {
    rank: 1,
    title: 'Electric Dreams',
    artist: 'Nova Signal',
    duration: '3:47',
    plays: '1.8M',
    change: '+12%',
    color: '#ff6a3d',
  },
  {
    rank: 2,
    title: 'Midnight Protocol',
    artist: 'Dark Matter',
    duration: '5:01',
    plays: '1.2M',
    change: '+8%',
    color: '#a78bfa',
  },
  {
    rank: 3,
    title: 'Glass Cities',
    artist: 'Auric Field',
    duration: '4:15',
    plays: '980K',
    change: '+5%',
    color: '#34d399',
  },
  {
    rank: 4,
    title: 'Velocity',
    artist: 'Pulse Engine',
    duration: '3:33',
    plays: '870K',
    change: '+3%',
    color: '#fbbf24',
  },
  {
    rank: 5,
    title: 'Hollow Sun',
    artist: 'Reflex Arc',
    duration: '6:10',
    plays: '760K',
    change: '+2%',
    color: '#f472b6',
  },
]

const recentAlbums = [
  { title: 'Pulse', artist: 'Nova Signal', year: '2025', color: '#ff6a3d' },
  { title: 'Voids', artist: 'Dark Matter', year: '2024', color: '#a78bfa' },
  { title: 'Tidal', artist: 'Auric Field', year: '2024', color: '#34d399' },
  { title: 'Orbit', artist: 'Reflex Arc', year: '2025', color: '#fbbf24' },
]

const categories = ['All', 'Electronic', 'Metal', 'Ambient', 'Funk', 'Disco']

function AlbumCard({ title, artist, year, color }) {
  const [liked, setLiked] = useState(false)
  const [playing, setPlaying] = useState(false)
  return (
    <div className="group relative bg-[#161616] rounded-xl2 p-4 hover:bg-[#1b1b1b] transition-all duration-300 cursor-pointer">
      {/* Album art placeholder */}
      <div
        className="relative w-full aspect-square rounded-xl mb-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: color + '33' }}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
          </div>
        </div>
        {/* Overlay play button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button
            onClick={() => setPlaying(!playing)}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 hover:scale-110"
            style={{ backgroundColor: color }}
          >
            {playing ? <Pause size={20} strokeWidth={2.5} /> : <Play size={20} strokeWidth={2.5} className="ml-0.5" />}
          </button>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-heading font-semibold text-[15px] text-white truncate">{title}</p>
          <p className="font-body text-[13px] text-[#9ca3af] truncate mt-0.5">{artist}</p>
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <button
            onClick={() => setLiked(!liked)}
            className="transition-transform duration-200 hover:scale-110"
          >
            <Heart
              size={16}
              strokeWidth={2}
              className={liked ? 'fill-[#ff6a3d] text-[#ff6a3d]' : 'text-[#9ca3af]'}
            />
          </button>
          <span className="text-[11px] text-[#9ca3af]/60 font-body">{year}</span>
        </div>
      </div>
    </div>
  )
}

function TrackRow({ track, index }) {
  const [playing, setPlaying] = useState(false)
  const [liked, setLiked] = useState(false)
  return (
    <div className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer">
      <div className="w-7 flex items-center justify-center">
        <span className="group-hover:hidden font-body text-[13px] text-[#9ca3af]/60 font-medium">
          {String(track.rank).padStart(2, '0')}
        </span>
        <button
          onClick={() => setPlaying(!playing)}
          className="hidden group-hover:flex items-center justify-center transition-transform duration-200 hover:scale-110"
        >
          {playing ? (
            <Pause size={16} strokeWidth={2.5} className="text-[#ff6a3d]" />
          ) : (
            <Play size={16} strokeWidth={2.5} className="text-[#ff6a3d]" />
          )}
        </button>
      </div>

      {/* Color indicator */}
      <div
        className="w-1.5 h-8 rounded-full flex-shrink-0"
        style={{ backgroundColor: track.color + '66' }}
      />

      <div className="flex-1 min-w-0">
        <p className="font-body font-medium text-[14px] text-white truncate">{track.title}</p>
        <p className="font-body text-[12px] text-[#9ca3af] truncate">{track.artist}</p>
      </div>

      <div className="hidden sm:flex items-center gap-1 text-[12px] text-emerald-400 font-body font-medium">
        <TrendingUp size={12} strokeWidth={2.5} />
        <span>{track.change}</span>
      </div>

      <div className="hidden md:flex items-center gap-1 text-[12px] text-[#9ca3af] font-body">
        <Flame size={12} strokeWidth={2} className="text-[#9ca3af]/60" />
        <span>{track.plays}</span>
      </div>

      <div className="flex items-center gap-1 text-[12px] text-[#9ca3af] font-body">
        <Clock size={12} strokeWidth={2} className="text-[#9ca3af]/60" />
        <span>{track.duration}</span>
      </div>

      <button
        onClick={() => setLiked(!liked)}
        className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
      >
        <Heart
          size={15}
          strokeWidth={2}
          className={liked ? 'fill-[#ff6a3d] text-[#ff6a3d]' : 'text-[#9ca3af]'}
        />
      </button>

      <button className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
        <MoreHorizontal size={16} strokeWidth={2} className="text-[#9ca3af]" />
      </button>
    </div>
  )
}

export default function MainContent({ onMenuOpen }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [heroPlaying, setHeroPlaying] = useState(false)

  return (
    <main className="flex-1 min-w-0 overflow-y-auto h-full px-4 lg:px-8 py-6 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            onClick={onMenuOpen}
            className="lg:hidden flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#9ca3af] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Menu size={18} strokeWidth={2} />
          </button>
          <div>
            <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl tracking-tight">
              Good evening
            </h1>
            <p className="font-body text-[#9ca3af] text-[15px] mt-1">
              Discover what's trending today
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                hidden sm:block px-3 py-1.5 rounded-full text-[12px] font-body font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-[#ff6a3d] text-white shadow-lg shadow-[#ff6a3d]/20'
                  : 'bg-white/5 text-[#9ca3af] hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured track hero */}
      <div
        className={`
          relative rounded-xl3 overflow-hidden p-6 lg:p-8
          bg-gradient-to-r ${featuredTrack.gradient}
          bg-[#161616] border border-white/5
        `}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#161616] -z-10" />
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -z-10 opacity-20"
          style={{ background: 'radial-gradient(circle, #ff6a3d, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full blur-3xl -z-10 opacity-10"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Fake album art */}
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-xl3 overflow-hidden flex-shrink-0 shadow-2xl shadow-black/60">
            <div className="w-full h-full bg-gradient-to-br from-[#ff6a3d]/60 via-[#a78bfa]/40 to-[#1b1b1b] flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/80" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#ff6a3d]/20 text-[#ff6a3d] text-[11px] font-body font-semibold uppercase tracking-wider mb-3">
              Featured Track
            </span>
            <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl tracking-tight">
              {featuredTrack.title}
            </h2>
            <p className="font-body text-[#9ca3af] text-[15px] mt-1">
              {featuredTrack.artist} · {featuredTrack.album}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setHeroPlaying(!heroPlaying)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff6a3d] text-white font-body font-semibold text-[14px] shadow-lg shadow-[#ff6a3d]/30 hover:bg-[#ff7a4d] transition-all duration-200 hover:scale-105"
              >
                {heroPlaying ? <Pause size={16} strokeWidth={2.5} /> : <Play size={16} strokeWidth={2.5} className="ml-0.5" />}
                {heroPlaying ? 'Pause' : 'Play now'}
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white font-body font-medium text-[14px] hover:bg-white/15 transition-all duration-200">
                <Heart size={15} strokeWidth={2} />
                Like
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2 flex-shrink-0">
            <div className="text-right">
              <p className="font-body text-[12px] text-[#9ca3af]/60 uppercase tracking-wider">Total plays</p>
              <p className="font-heading font-bold text-white text-2xl">{featuredTrack.plays}</p>
            </div>
            <div className="text-right">
              <p className="font-body text-[12px] text-[#9ca3af]/60 uppercase tracking-wider">Duration</p>
              <p className="font-heading font-semibold text-white text-lg">{featuredTrack.duration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Albums */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-semibold text-white text-[18px]">Recent Albums</h2>
          <button className="font-body text-[13px] text-[#9ca3af] hover:text-[#ff6a3d] transition-colors duration-200">
            View all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentAlbums.map((album) => (
            <AlbumCard key={album.title} {...album} />
          ))}
        </div>
      </section>

      {/* Trending Tracks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-semibold text-white text-[18px]">Trending Now</h2>
          <button className="font-body text-[13px] text-[#9ca3af] hover:text-[#ff6a3d] transition-colors duration-200">
            See all
          </button>
        </div>
        {/* Column headers */}
        <div className="flex items-center gap-4 px-4 mb-1">
          <div className="w-7" />
          <div className="w-1.5 flex-shrink-0" />
          <p className="flex-1 font-body text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/50">
            Track
          </p>
          <p className="hidden sm:block w-16 font-body text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/50">
            Growth
          </p>
          <p className="hidden md:block w-16 font-body text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/50">
            Plays
          </p>
          <p className="w-12 font-body text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]/50">
            Time
          </p>
          <div className="w-7" />
          <div className="w-6" />
        </div>
        <div className="bg-[#111111] rounded-xl border border-white/5">
          {trending.map((track, i) => (
            <div key={track.title}>
              <TrackRow track={track} index={i} />
              {i < trending.length - 1 && <div className="h-px bg-white/3 mx-4" />}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
