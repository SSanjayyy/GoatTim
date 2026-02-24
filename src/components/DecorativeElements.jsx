import { useEffect, useState } from 'react'

const FALLING_LEAVES = [
  { type: 'oak', delay: '0s', duration: '28s', left: '5%', scale: 0.9 },
  { type: 'maple', delay: '-8s', duration: '33s', left: '18%', scale: 1.05 },
  { type: 'oak', delay: '-14s', duration: '30s', left: '34%', scale: 0.75 },
  { type: 'maple', delay: '-4s', duration: '36s', left: '49%', scale: 1.1 },
  { type: 'oak', delay: '-20s', duration: '40s', left: '63%', scale: 0.85 },
  { type: 'maple', delay: '-12s', duration: '31s', left: '76%', scale: 0.92 },
  { type: 'oak', delay: '-24s', duration: '38s', left: '89%', scale: 1.02 },
  { type: 'maple', delay: '-6s', duration: '34s', left: '12%', scale: 0.72 },
  { type: 'oak', delay: '-18s', duration: '43s', left: '27%', scale: 1.08 },
  { type: 'maple', delay: '-10s', duration: '41s', left: '41%', scale: 0.84 },
  { type: 'oak', delay: '-27s', duration: '39s', left: '57%', scale: 1.14 },
  { type: 'maple', delay: '-16s', duration: '35s', left: '69%', scale: 0.8 },
  { type: 'oak', delay: '-22s', duration: '44s', left: '81%', scale: 0.95 },
  { type: 'maple', delay: '-30s', duration: '42s', left: '94%', scale: 0.78 }
]

const FLOATING_MOTES = [
  { top: '8%', left: '14%', delay: '0s', duration: '12s', size: 7 },
  { top: '18%', left: '80%', delay: '-2s', duration: '15s', size: 5 },
  { top: '39%', left: '22%', delay: '-4s', duration: '13s', size: 6 },
  { top: '53%', left: '88%', delay: '-6s', duration: '16s', size: 7 },
  { top: '66%', left: '10%', delay: '-1s', duration: '14s', size: 4 },
  { top: '79%', left: '73%', delay: '-8s', duration: '17s', size: 5 }
]

const POLLEN_PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  left: `${6 + ((index * 11) % 90)}%`,
  top: `${8 + ((index * 17) % 84)}%`,
  size: 3 + (index % 3),
  duration: `${10 + (index % 6) * 2}s`,
  delay: `${-(index % 8)}s`
}))

const LANTERNS = [
  { id: 1, top: '4%', left: '8%', delay: '0s', duration: '6.2s' },
  { id: 2, top: '6%', right: '9%', delay: '-2.6s', duration: '6.8s' }
]

function LeafIcon({ type = 'oak', className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      role="presentation"
      aria-hidden="true"
    >
      {type === 'maple' ? (
        <path
          d="M58 6 69 27l18-10-7 20 21 2-18 12 14 17-21-5-2 24-16-15-16 15-2-24-21 5 14-17-18-12 21-2-7-20 18 10z"
          fill="#c46a2d"
          stroke="#8f4c31"
          strokeWidth="4"
          filter="url(#leafOrganic)"
        />
      ) : (
        <path
          d="M60 8c16 2 25 14 25 31 10 3 18 11 20 22-8-2-16-1-23 3 1 18-7 33-22 44-15-11-23-26-22-44-7-4-15-5-23-3 2-11 10-19 20-22 0-17 9-29 25-31z"
          fill="#a65a3a"
          stroke="#6a4e42"
          strokeWidth="4"
          filter="url(#leafOrganic)"
        />
      )}
      <path d="M60 22v72" stroke="#6a4e42" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function SvgFilterDefs() {
  return (
    <svg className="svg-filter-defs" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <filter id="paperWobble" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.015 0.03" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="leafOrganic" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="5" result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="4" />
          <feGaussianBlur stdDeviation="0.35" result="soft" />
          <feColorMatrix
            in="soft"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.94 0"
            result="ink"
          />
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#6a4e42" floodOpacity="0.16" />
          <feBlend in="ink" in2="SourceGraphic" mode="normal" />
        </filter>
        <filter id="lineSticker" x="-20%" y="-20%" width="140%" height="140%">
          <feMorphology operator="dilate" radius="0.35" in="SourceGraphic" result="thick" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#6a4e42" floodOpacity="0.13" />
          <feBlend in="thick" in2="SourceGraphic" mode="normal" />
        </filter>
        <filter id="watercolorBlob" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.022" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
    </svg>
  )
}

export function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {FALLING_LEAVES.map((leaf, index) => (
        <div
          key={`${leaf.type}-${index}`}
          className={`floating-leaf-wrap leaf-${leaf.type}`}
          style={{
            left: leaf.left,
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
            '--leaf-scale': leaf.scale
          }}
        >
          <LeafIcon type={leaf.type} className="floating-leaf-svg" />
        </div>
      ))}
    </div>
  )
}

export function FloatingMotes() {
  return (
    <div className="floating-motes" aria-hidden="true">
      {FLOATING_MOTES.map((mote, index) => (
        <span
          key={`mote-${index}`}
          className="floating-mote"
          style={{
            top: mote.top,
            left: mote.left,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            animationDelay: mote.delay,
            animationDuration: mote.duration
          }}
        />
      ))}
    </div>
  )
}

export function PollenParticles() {
  return (
    <div className="pollen-layer" aria-hidden="true">
      {POLLEN_PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className="pollen-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: particle.duration,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  )
}

export function FloatingLanterns() {
  return (
    <div className="floating-lantern-layer" aria-hidden="true">
      {LANTERNS.map((lantern) => (
        <span
          key={lantern.id}
          className="floating-lantern"
          style={{
            top: lantern.top,
            left: lantern.left,
            right: lantern.right,
            animationDelay: lantern.delay,
            animationDuration: lantern.duration
          }}
        />
      ))}
    </div>
  )
}

export function IvyCornerFrame() {
  return (
    <>
      <svg className="ivy-frame ivy-frame-tl" viewBox="0 0 180 180" aria-hidden="true">
        <path d="M168 12C118 22 73 58 18 168" fill="none" stroke="#6b7a52" strokeWidth="3.2" strokeLinecap="round" filter="url(#lineSticker)" />
        <circle cx="128" cy="34" r="7" fill="#7a8f6b" />
        <circle cx="97" cy="63" r="7" fill="#6b7a52" />
        <circle cx="63" cy="98" r="7" fill="#7a8f6b" />
      </svg>
      <svg className="ivy-frame ivy-frame-br" viewBox="0 0 180 180" aria-hidden="true">
        <path d="M12 168C62 158 107 122 162 12" fill="none" stroke="#6b7a52" strokeWidth="3.2" strokeLinecap="round" filter="url(#lineSticker)" />
        <circle cx="52" cy="146" r="7" fill="#7a8f6b" />
        <circle cx="83" cy="117" r="7" fill="#6b7a52" />
        <circle cx="117" cy="82" r="7" fill="#7a8f6b" />
      </svg>
    </>
  )
}

export function WindTrails() {
  return (
    <svg className="wind-trails" viewBox="0 0 1200 300" aria-hidden="true">
      <path d="M20 110c120-44 240-44 360 0s240 44 360 0 240-44 440 0" />
      <path d="M60 165c96-33 192-33 288 0s192 33 288 0 192-33 336 0" />
      <path d="M100 220c80-26 160-26 240 0s160 26 240 0 160-26 280 0" />
    </svg>
  )
}

export function BirdSilhouettes() {
  return (
    <svg className="bird-silhouettes" viewBox="0 0 900 160" aria-hidden="true">
      <path d="M110 74c14-10 30-10 44 0M154 74c14-10 30-10 44 0" />
      <path d="M430 56c12-9 26-9 38 0M466 56c12-9 26-9 38 0" />
      <path d="M710 92c16-11 34-11 50 0M758 92c16-11 34-11 50 0" />
    </svg>
  )
}

export function BotanicalCorners() {
  return (
    <>
      <svg className="botanical-corner corner-top-left" viewBox="0 0 120 120" aria-hidden="true">
        <path
          d="M110 15C72 24 45 50 20 95M88 20c-8 22-18 32-36 40M66 47c-6 12-11 19-22 29"
          fill="none"
          stroke="#6b7a52"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#lineSticker)"
        />
      </svg>
      <svg className="botanical-corner corner-bottom-right" viewBox="0 0 120 120" aria-hidden="true">
        <path
          d="M10 105c38-9 65-35 90-80M32 100c8-22 18-32 36-40M54 73c6-12 11-19 22-29"
          fill="none"
          stroke="#6b7a52"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#lineSticker)"
        />
      </svg>
    </>
  )
}

export function WildflowerSprigs() {
  return (
    <>
      <svg className="wildflower-sprig sprig-left" viewBox="0 0 140 180" aria-hidden="true">
        <path d="M65 170C60 136 59 98 71 20" fill="none" stroke="#6b7a52" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M69 62c-14-4-22-14-28-25M70 89c11-8 20-9 31-8M66 120c-14 5-23 14-30 27" fill="none" stroke="#7a8f6b" strokeWidth="2.7" strokeLinecap="round" filter="url(#lineSticker)" />
        <circle cx="38" cy="33" r="7" fill="#c46a2d" />
        <circle cx="100" cy="80" r="6" fill="#a65a3a" />
      </svg>
      <svg className="wildflower-sprig sprig-right" viewBox="0 0 140 180" aria-hidden="true">
        <path d="M75 170C80 136 81 98 69 20" fill="none" stroke="#6b7a52" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M71 62c14-4 22-14 28-25M70 89c-11-8-20-9-31-8M74 120c14 5 23 14 30 27" fill="none" stroke="#7a8f6b" strokeWidth="2.7" strokeLinecap="round" filter="url(#lineSticker)" />
        <circle cx="102" cy="33" r="7" fill="#c46a2d" />
        <circle cx="40" cy="80" r="6" fill="#a65a3a" />
      </svg>
    </>
  )
}

export function VineDivider() {
  return (
    <svg className="vine-divider" viewBox="0 0 920 110" aria-hidden="true">
      <path
        className="main-vine"
        d="M14 56c63-34 130-34 194 0s131 34 195 0 131-34 195 0 131 34 195 0"
        fill="none"
        stroke="#6b7a52"
        strokeWidth="3.4"
        strokeLinecap="round"
        filter="url(#lineSticker)"
      />
      <path
        className="twig-vine"
        d="M106 49c-6-11-15-16-27-17M272 62c8 10 18 14 30 13M455 47c-6-11-15-16-27-17M637 62c8 10 18 14 30 13M813 49c-6-11-15-16-27-17"
        fill="none"
        stroke="#7a8f6b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="190" cy="55" r="4.2" fill="#c46a2d" />
      <circle cx="546" cy="55" r="4.2" fill="#a65a3a" />
      <circle cx="730" cy="55" r="4.2" fill="#c46a2d" />
    </svg>
  )
}

export function AnimatedUnderline({ className = '' }) {
  return (
    <svg className={`animated-underline ${className}`.trim()} viewBox="0 0 280 26" aria-hidden="true">
      <path d="M6 14c50 10 109 10 162 0 38-8 68-8 106 0" />
    </svg>
  )
}

export function SignpostDivider() {
  return (
    <svg className="signpost-divider" viewBox="0 0 980 110" aria-hidden="true">
      <rect x="462" y="18" width="56" height="14" rx="7" fill="#9a6e50" />
      <rect x="446" y="38" width="88" height="16" rx="8" fill="#b07c58" />
      <rect x="476" y="54" width="28" height="42" rx="9" fill="#8a654e" />
      <path d="M36 54h408M536 54h408" stroke="#6b7a52" strokeWidth="3" strokeLinecap="round" />
      <circle cx="204" cy="54" r="4" fill="#c46a2d" />
      <circle cx="774" cy="54" r="4" fill="#c46a2d" />
    </svg>
  )
}

export function HandDrawnBorder({ className = '' }) {
  return (
    <svg className={`hand-drawn-border ${className}`.trim()} viewBox="0 0 1000 620" aria-hidden="true">
      <path
        d="M22 74C22 44 46 22 74 22h852c30 0 52 22 52 52v472c0 30-22 52-52 52H74c-28 0-52-22-52-52V74z"
        fill="none"
        stroke="#6b7a52"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lineSticker)"
      />
    </svg>
  )
}

export function MonogramBadge() {
  return (
    <svg className="monogram-badge" viewBox="0 0 90 90" aria-hidden="true">
      <circle cx="45" cy="45" r="36" fill="#e8dccb" stroke="#6b7a52" strokeWidth="3" filter="url(#lineSticker)" />
      <text x="45" y="52" textAnchor="middle" fontSize="23" fill="#6a4e42" fontFamily="Cormorant Garamond, serif">
        RL
      </text>
    </svg>
  )
}

export function PressedLeafBadge({ className = '' }) {
  return (
    <svg className={`pressed-leaf-badge ${className}`.trim()} viewBox="0 0 54 54" aria-hidden="true">
      <circle cx="27" cy="27" r="23" fill="#f1e7d7" stroke="#7a8f6b" strokeWidth="1.7" />
      <path d="M28 11c7 1 12 7 12 14 5 1 8 5 9 10-4-1-8 0-11 2 0 8-4 14-10 19-6-5-10-11-10-19-3-2-7-3-11-2 1-5 4-9 9-10 0-7 5-13 12-14z" fill="#c46a2d" stroke="#8f4c31" strokeWidth="1.8" />
      <path d="M28 16v22" stroke="#6a4e42" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function FooterSeal() {
  return (
    <svg className="footer-seal" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 11 76 18 91 16l8 14 14 8-2 15 7 14-11 11-4 15-15 3-11 11-14-7-14 7-11-11-15-3-4-15-11-11 7-14-2-15 14-8 8-14 15 2z" fill="#b46030" opacity="0.85" />
      <circle cx="60" cy="60" r="24" fill="#f5f1e8" />
      <text x="60" y="66" textAnchor="middle" fontSize="12" fill="#6a4e42" fontFamily="Libre Baskerville, serif">
        Thanks
      </text>
    </svg>
  )
}

export function MouseVineTrail() {
  const [trail, setTrail] = useState([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let lastTime = 0
    let id = 0
    let cleanupTimer

    const handleMove = (event) => {
      const now = Date.now()
      if (now - lastTime < 42) return
      lastTime = now

      id += 1
      const item = {
        id,
        x: event.clientX,
        y: event.clientY,
        rotate: (Math.random() - 0.5) * 38,
        scale: 0.86 + Math.random() * 0.52,
        type: Math.random() > 0.45 ? 'maple' : 'oak'
      }

      setTrail((prev) => [...prev.slice(-44), item])
    }

    window.addEventListener('mousemove', handleMove, { passive: true })

    cleanupTimer = setInterval(() => {
      setTrail((prev) => prev.slice(1))
    }, 170)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      clearInterval(cleanupTimer)
    }
  }, [])

  return (
    <div className="mouse-vine-layer" aria-hidden="true">
      {trail.map((item) => (
        <span
          key={item.id}
          className={`mouse-vine-mark cursor-leaf-mark ${item.type}`}
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            '--vine-rotate': `${item.rotate}deg`,
            '--vine-scale': item.scale
          }}
        />
      ))}
    </div>
  )
}

export function ParallaxController() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement

    const handleMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      root.style.setProperty('--parallax-x', `${x.toFixed(4)}`)
      root.style.setProperty('--parallax-y', `${y.toFixed(4)}`)
    }

    const handleScroll = () => {
      const scrollRatio = Math.min(window.scrollY / 1200, 1)
      root.style.setProperty('--parallax-scroll', `${scrollRatio.toFixed(4)}`)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export function FirstLoadIntro() {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const seen = localStorage.getItem('cottage_intro_seen_v1')
    if (seen) return
    setShowIntro(true)
    localStorage.setItem('cottage_intro_seen_v1', 'true')
    const timer = setTimeout(() => setShowIntro(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  if (!showIntro) return null

  return (
    <div className="first-load-intro" aria-hidden="true">
      <div className="intro-leaf-cluster" />
      <p>Autumn Memories</p>
    </div>
  )
}

export function WatercolorBlob({ className = '' }) {
  return (
    <svg className={`watercolor-blob ${className}`.trim()} viewBox="0 0 500 320" aria-hidden="true">
      <path
        d="M82 45c40-39 128-52 191-27 73 30 167 89 151 163-14 67-127 89-201 96-71 6-145-15-181-67-39-56-8-126 40-165z"
        fill="#e8dccb"
        fillOpacity="0.72"
        filter="url(#watercolorBlob)"
      />
    </svg>
  )
}

export function ArchedFrame({ children, className = '' }) {
  return (
    <div className={`arched-frame ${className}`.trim()}>
      <div className="arched-frame-inner">{children}</div>
      <svg className="arched-frame-outline" viewBox="0 0 220 280" aria-hidden="true">
        <path
          d="M16 264V110C16 53 62 16 110 16s94 37 94 94v154"
          fill="none"
          stroke="#6a4e42"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#lineSticker)"
        />
      </svg>
    </div>
  )
}
