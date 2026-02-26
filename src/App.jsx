import { useEffect, useRef, useState } from 'react'
import Door from './components/Door'
import ThanksPage from './components/ThanksPage'
import './App.css'

function App() {
  const [showThanks, setShowThanks] = useState(false)
  const [doorRefresh, setDoorRefresh] = useState(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [volume, setVolume] = useState(65)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsAudioPlaying(true)
    const handlePause = () => setIsAudioPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    const tryAutoplay = async () => {
      try {
        await audio.play()
      } catch {
        setIsAudioPlaying(false)
      }
    }

    tryAutoplay()

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume / 100
  }, [volume])

  const handleCorrectAnswer = () => {
    setShowThanks(true)
  }

  const handleGoBack = () => {
    setShowThanks(false)
    setDoorRefresh((prev) => prev + 1)
  }

  const handlePlayMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      await audio.play()
    } catch {
      // Browser blocked playback without interaction.
    }
  }

  const handlePauseMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
  }

  const handleVolumeChange = (e) => {
    const nextVolume = Number(e.target.value)
    setVolume(nextVolume)
  }

  return (
    <div className="app">
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/drew-barrymore.mp3" type="audio/mpeg" />
      </audio>

      <div className="now-playing-chip" role="status" aria-live="polite">
        <p>
          {isAudioPlaying ? 'Playing now' : 'Paused'}: SZA - Drew Barrymore
        </p>
        <div className="now-playing-controls">
          <button type="button" onClick={handlePlayMusic} className="now-playing-button" aria-label="Play music" title="Play">{'\u25B6'}</button>
          <button type="button" onClick={handlePauseMusic} className="now-playing-button" aria-label="Pause music" title="Pause">{'\u23F8'}</button>
        </div>
        <div className="now-playing-volume">
          <label htmlFor="volume-slider">Volume</label>
          <input
            id="volume-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Music volume"
          />
        </div>
      </div>

      {!showThanks ? (
        <Door key={doorRefresh} refreshTrigger={doorRefresh} onCorrectAnswer={handleCorrectAnswer} />
      ) : (
        <ThanksPage onGoBack={handleGoBack} />
      )}
    </div>
  )
}

export default App
