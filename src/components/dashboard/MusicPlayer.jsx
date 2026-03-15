import { useState, useRef } from 'react'
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Heart,
  ListMusic,
  Mic2,
} from 'lucide-react'

const currentTrack = {
  title: 'Neon Shadows',
  artist: 'Synth Collective',
  duration: 263, // seconds
  color: '#ff6a3d',
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [liked, setLiked] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [repeated, setRepeated] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(72)
  const [progress, setProgress] = useState(38) // percent
  const progressRef = useRef(null)

  const currentSeconds = Math.round((progress / 100) * currentTrack.duration)

  function handleProgressClick(e) {
    const rect = progressRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setProgress(pct)
  }

  return (
    <footer className="h-[80px] flex-shrink-0 bg-[#111111] border-t border-white/5 px-4 lg:px-8 flex items-center gap-4 lg:gap-8">
      {/* Track info */}
      <div className="flex items-center gap-3 w-[200px] lg:w-[260px] flex-shrink-0 min-w-0">
        {/* Fake album art */}
        <div
          className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${currentTrack.color}55, ${currentTrack.color}22)`,
          }}
        >
          <div
            className={`w-4 h-4 rounded-full ${playing ? 'animate-spin' : ''}`}
            style={{ backgroundColor: currentTrack.color, animationDuration: '3s' }}
          />
        </div>
        <div className="min-w-0">
          <p className="font-body font-semibold text-[13px] text-white truncate">{currentTrack.title}</p>
          <p className="font-body text-[11px] text-[#9ca3af] truncate">{currentTrack.artist}</p>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className="flex-shrink-0 ml-1 transition-transform duration-200 hover:scale-110"
        >
          <Heart
            size={16}
            strokeWidth={2}
            className={liked ? 'fill-[#ff6a3d] text-[#ff6a3d]' : 'text-[#9ca3af] hover:text-white'}
          />
        </button>
      </div>

      {/* Center controls */}
      <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
        {/* Buttons */}
        <div className="flex items-center gap-3 lg:gap-5">
          <button
            onClick={() => setShuffled(!shuffled)}
            className={`transition-all duration-200 hover:scale-110 ${shuffled ? 'text-[#ff6a3d]' : 'text-[#9ca3af] hover:text-white'}`}
          >
            <Shuffle size={16} strokeWidth={2} />
          </button>
          <button className="text-[#9ca3af] hover:text-white transition-all duration-200 hover:scale-110">
            <SkipBack size={20} strokeWidth={2} />
          </button>
          <button
            onClick={() => setPlaying(!playing)}
            className="w-10 h-10 rounded-full bg-[#ff6a3d] flex items-center justify-center text-white shadow-lg shadow-[#ff6a3d]/30 hover:bg-[#ff7a4d] transition-all duration-200 hover:scale-105"
          >
            {playing ? (
              <Pause size={18} strokeWidth={2.5} />
            ) : (
              <Play size={18} strokeWidth={2.5} className="ml-0.5" />
            )}
          </button>
          <button className="text-[#9ca3af] hover:text-white transition-all duration-200 hover:scale-110">
            <SkipForward size={20} strokeWidth={2} />
          </button>
          <button
            onClick={() => setRepeated(!repeated)}
            className={`transition-all duration-200 hover:scale-110 ${repeated ? 'text-[#ff6a3d]' : 'text-[#9ca3af] hover:text-white'}`}
          >
            <Repeat size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center gap-2 max-w-[480px]">
          <span className="font-body text-[11px] text-[#9ca3af]/60 w-8 text-right flex-shrink-0">
            {formatTime(currentSeconds)}
          </span>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="flex-1 h-1 bg-white/10 rounded-full cursor-pointer group relative"
          >
            <div
              className="absolute inset-y-0 left-0 bg-[#ff6a3d] rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <span className="font-body text-[11px] text-[#9ca3af]/60 w-8 flex-shrink-0">
            {formatTime(currentTrack.duration)}
          </span>
        </div>
      </div>

      {/* Right controls */}
      <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0 w-[160px] lg:w-[200px] justify-end">
        <button className="text-[#9ca3af] hover:text-white transition-all duration-200 hover:scale-110">
          <Mic2 size={16} strokeWidth={2} />
        </button>
        <button className="text-[#9ca3af] hover:text-white transition-all duration-200 hover:scale-110">
          <ListMusic size={16} strokeWidth={2} />
        </button>
        <button
          onClick={() => setMuted(!muted)}
          className="text-[#9ca3af] hover:text-white transition-all duration-200 hover:scale-110"
        >
          {muted ? <VolumeX size={18} strokeWidth={2} /> : <Volume2 size={18} strokeWidth={2} />}
        </button>
        {/* Volume slider */}
        <div className="flex-1 h-1 bg-white/10 rounded-full cursor-pointer group relative max-w-[80px]">
          <input
            type="range"
            min="0"
            max="100"
            value={muted ? 0 : volume}
            onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false) }}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute inset-y-0 left-0 bg-[#9ca3af] group-hover:bg-[#ff6a3d] rounded-full transition-colors duration-200"
            style={{ width: `${muted ? 0 : volume}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ left: `calc(${muted ? 0 : volume}% - 5px)` }}
          />
        </div>
      </div>
    </footer>
  )
}
