  import { useEffect, useRef } from 'react'
  import { ArrowDown } from 'lucide-react'
  import XsLogo from './XsLogo'

  interface HeroProps { onShopClick: () => void }

  const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size:    2 + (i * 7919 % 3),
    left:    (i * 3571 % 100),
    delay:   (i * 1.37) % 8,
    dur:     6 + (i * 2.13 % 6),
    opacity: 0.12 + (i * 0.03 % 0.25),
  }))

  export default function Hero({ onShopClick }: HeroProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const el = ref.current
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      const id = requestAnimationFrame(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      return () => cancelAnimationFrame(id)
    }, [])

    return (
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: '100svh',
          paddingTop: '72px',
          paddingBottom: '32px',
          background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #1c0e00 0%, #0d0d0d 55%, #080808 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(245,130,13,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,130,13,0.06) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
              animation: 'gridDrift 20s linear infinite',
            }} />

        {PARTICLES.map(p => (
          <div key={p.id} className="absolute rounded-full pointer-events-none"
              style={{
                width: p.size, height: p.size,
                left: `${p.left}%`, bottom: '-10px',
                background: 'linear-gradient(135deg, #f5d020, #f5820d)',
                opacity: p.opacity,
                animation: `particleRise ${p.dur}s ${p.delay}s ease-in infinite`,
              }} />
        ))}

        <div className="absolute pointer-events-none"
            style={{
              width: '600px', height: '300px',
              top: '35%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse, rgba(245,130,13,0.07) 0%, transparent 70%)',
              animation: 'ambientPulse 6s ease-in-out infinite',
            }} />

        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center relative z-10">

          <div ref={ref}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-6"
                style={{ border: '1px solid rgba(245,130,13,0.35)', background: 'rgba(245,130,13,0.07)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse2" style={{ background: '#f5820d' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>
                0 г цукру · 100% результату
              </span>
            </div>

            <h1 className="font-display tracking-wide leading-none mb-5"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              <span className="block text-white">ЕНЕРГІЯ</span>
              <span className="block text-xs-gradient">БЕЗ</span>
              <span className="block text-white">КОМПРОМІСІВ</span>
            </h1>

            <p className="text-xs-light leading-relaxed max-w-md mb-8 font-light"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
              XS™ — протеїнові батончики, енергетичні напої та спортивне харчування для тих, хто рухається вперед і не зупиняється на досягнутому.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <button onClick={onShopClick} className="btn-primary">Переглянути продукти</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-outline">Дізнатися більше</button>
            </div>

            <div className="flex gap-8 flex-wrap">
              {[
                { num: '0г',  label: 'цукру в дринках' },
                { num: '20г', label: 'білка в батончику' },
                { num: '67%', label: 'відчули ефект' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="stat-num" style={{ fontSize: '2.2rem' }}>{num}</div>
                  <div className="text-xs text-xs-muted mt-0.5 tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center relative" style={{ height: '360px' }}>
            {[240, 310, 380].map((s, i) => (
              <div key={s} className="absolute rounded-full pointer-events-none"
                  style={{ width: s, height: s, border: `1px solid rgba(245,130,13,${0.12 - i * 0.03})`, animation: `ringPulse 4s ${i * 1.3}s ease-in-out infinite` }} />
            ))}

            <div className="relative z-10 animate-float"><XsLogo size={150} /></div>

            <div className="absolute top-6 right-2 xs-card px-4 py-3 animate-float" style={{ animationDelay: '0.8s', minWidth: '120px' }}>
              <div className="text-xs text-xs-muted uppercase tracking-wide mb-0.5">Цукор</div>
              <div className="stat-num text-3xl">0 г</div>
            </div>
            <div className="absolute bottom-10 left-0 xs-card px-4 py-3 animate-float" style={{ animationDelay: '1.6s', minWidth: '120px' }}>
              <div className="text-xs text-xs-muted uppercase tracking-wide mb-0.5">Білок</div>
              <div className="stat-num text-3xl">20 г</div>
            </div>
            <div className="absolute bottom-2 right-6 xs-card px-4 py-3 animate-float" style={{ animationDelay: '0.4s', minWidth: '130px' }}>
              <div className="text-xs text-xs-muted uppercase tracking-wide mb-0.5">Вітаміни</div>
              <div className="text-white font-display text-xl tracking-wide">B · C · E</div>
            </div>
          </div>
        </div>

      </section>
    )
  }