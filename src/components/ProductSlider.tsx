import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { useReveal } from '../hooks/useReveal'

const AUTOPLAY_MS = 5000

export default function ProductSlider() {
  const [index, setIndex]   = useState(0)
  const [paused, setPaused] = useState(false)

  const heading = useReveal()
  const stage   = useReveal()

  const total  = PRODUCTS.length
  const active = PRODUCTS[index]

  const next = useCallback(() => setIndex(i => (i + 1) % total), [total])
  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total])
  const jump = useCallback((i: number) => setIndex(i), [])

  // Simple, reliable autoplay — one timer, resets on index change or pause.
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setIndex(i => (i + 1) % total), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [index, paused, total])

  return (
    <section id="showcase" className="py-24 md:py-28 px-4 md:px-6 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-700"
           style={{ background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${active.accentColor}14 0%, transparent 70%)` }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div ref={heading.ref} className="reveal text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-5"
               style={{ border: '1px solid rgba(245,130,13,0.3)', background: 'rgba(245,130,13,0.06)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>Вітрина</span>
          </div>
          <h2 className="font-display tracking-wide text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            УВЕСЬ <span className="text-xs-gradient">АРСЕНАЛ XS™</span>
          </h2>
          <p className="text-xs-muted text-sm max-w-md mx-auto font-light leading-relaxed px-2">
            Уся лінійка XS™ в одному місці. Слайдер перемикається автоматично кожні 5 секунд.
          </p>
        </div>

        {/* Stage */}
        <div
          ref={stage.ref}
          className="reveal grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #141414, #0e0e0e)', border: '1px solid #222' }}
        >
          {/* ── Image ── */}
          <div className="relative flex items-center justify-center"
               style={{
                 height: 'clamp(300px, 42vw, 440px)',
                 background: `radial-gradient(ellipse 100% 80% at 50% 115%, ${active.accentColor}55 0%, ${active.accentColor}15 45%, transparent 75%)`,
                 transition: 'background 0.7s ease',
               }}>
            {/* Glow halo */}
            <div className="absolute pointer-events-none"
                 style={{
                   width: '260px', height: '260px', borderRadius: '50%',
                   background: `radial-gradient(circle, ${active.accentColor}30 0%, transparent 70%)`,
                   filter: 'blur(24px)', opacity: 0.7,
                   transition: 'background 0.7s ease',
                 }} />

            {/* Rotating ring (desktop only) */}
            <div className="absolute pointer-events-none rounded-full hidden sm:block"
                 style={{
                   width: 'min(340px, 80%)', aspectRatio: '1',
                   border: `1px dashed ${active.accentColor}40`,
                   animation: 'spin360 24s linear infinite',
                 }} />

            {active.image ? (
              <img
                key={active.id}
                src={active.image}
                alt={`${active.name} — ${active.tagline}`}
                className="relative z-10 object-contain"
                style={{
                  maxHeight: '78%', maxWidth: '78%', padding: '12px',
                  animation: 'sliderFade 0.55s ease',
                  filter: `drop-shadow(0 14px 28px ${active.accentColor}55)`,
                }}
              />
            ) : (
              <span className="font-display text-6xl text-xs-gradient relative z-10">XS™</span>
            )}

            {active.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded z-20"
                    style={{ background: 'linear-gradient(135deg,#f5d020,#f5820d)', color: '#080808' }}>
                {active.badge}
              </span>
            )}
            <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded z-20"
                  style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', color: '#bbb' }}>
              {active.weight}
            </span>

            {/* Pause / play */}
            <button onClick={() => setPaused(p => !p)}
                    className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110 active:scale-95"
                    style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.14)', color: '#f5820d', backdropFilter: 'blur(6px)' }}
                    aria-label={paused ? 'Запустити' : 'Пауза'}>
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>

          {/* ── Info ── */}
          <div className="flex flex-col p-6 md:p-8 lg:pr-12">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: '#f5820d' }}>
              {active.tagline}
            </div>
            <h3 key={`t-${active.id}`} className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-wide mb-3 md:mb-4 leading-tight"
                style={{ animation: 'sliderFade 0.5s ease' }}>
              {active.name}
            </h3>

            {/* Full description, always visible */}
            <p key={`d-${active.id}`} className="text-xs-light text-sm leading-relaxed font-light mb-5 md:mb-6"
               style={{ animation: 'sliderFade 0.5s ease' }}>
              {active.fullDesc ?? active.desc}
            </p>

            {/* Price */}
            {(active.priceOne || active.pricePack) && (
              <div className="flex items-center gap-4 mb-5 md:mb-6 flex-wrap">
                {active.priceOne && (
                  <div className="flex flex-col">
                    <span className="text-xs text-xs-muted font-light">1 шт</span>
                    <span className="font-display text-2xl" style={{ color: '#f5d020' }}>{active.priceOne}</span>
                  </div>
                )}
                {active.pricePack && (
                  <>
                    <div className="w-px h-10 bg-xs-border" />
                    <div className="flex flex-col">
                      <span className="text-xs text-xs-muted font-light">{active.packLabel}</span>
                      <span className="font-display text-2xl" style={{ color: '#f5820d' }}>{active.pricePack}</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center gap-4 mt-auto">
              <button onClick={prev}
                      className="w-11 h-11 rounded-full border border-xs-border flex items-center justify-center text-xs-muted hover:text-white hover:border-orange-500/40 transition-all active:scale-95"
                      aria-label="Попередній">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xs-black transition-transform hover:scale-105 active:scale-95"
                      style={{ background: 'linear-gradient(135deg,#f5d020,#f5820d)' }}
                      aria-label="Наступний">
                <ChevronRight size={18} />
              </button>
              <span className="text-xs-muted text-sm font-light ml-2 tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* ── Thumbnail rail ── */}
        <div className="mt-7 flex gap-2.5 overflow-x-auto pb-2 md:justify-center md:flex-wrap md:overflow-visible"
             style={{ scrollbarWidth: 'none' }}>
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => jump(i)}
              className="relative rounded-xl overflow-hidden transition-all duration-300 group flex-shrink-0"
              style={{
                width: '60px', height: '60px',
                border: i === index ? `2px solid ${p.accentColor}` : '2px solid #222',
                background: `radial-gradient(circle at 50% 80%, ${p.accentColor}30, #111)`,
                opacity: i === index ? 1 : 0.5,
                transform: i === index ? 'scale(1.06)' : 'scale(1)',
              }}
              aria-label={p.tagline}
            >
              {p.image && (
                <img src={p.image} alt="" className="w-full h-full object-contain p-1.5 transition-transform group-hover:scale-110" />
              )}
            </button>
          ))}
        </div>

        {/* ── Dots ── */}
        <div className="mt-5 flex gap-2 justify-center flex-wrap">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => jump(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? '26px' : '8px',
                height: '8px',
                background: i === index ? 'linear-gradient(90deg,#f5d020,#f5820d)' : '#333',
              }}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}