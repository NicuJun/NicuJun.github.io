import { useReveal } from '../hooks/useReveal'
import XsLogo from './XsLogo'

interface CTAProps { onShopClick: () => void }

export default function CTA({ onShopClick }: CTAProps) {
  const { ref } = useReveal()

  return (
    <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="reveal rounded-2xl px-10 py-16 text-center relative overflow-hidden"
             style={{ background: 'linear-gradient(#141414,#141414) padding-box, linear-gradient(160deg,#f5d020,#f5820d,#e03000) border-box', border: '1px solid transparent' }}>

          {/* Animated grid */}
          <div className="absolute inset-0 pointer-events-none opacity-30"
               style={{ backgroundImage: `linear-gradient(rgba(245,130,13,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(245,130,13,0.12) 1px, transparent 1px)`, backgroundSize: '48px 48px', animation: 'gridDrift 15s linear infinite' }} />

          {/* Pulsing rings */}
          {[120, 200, 290, 390].map((s, i) => (
            <div key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                 style={{ width: s, height: s, border: `1px solid rgba(245,130,13,${0.18 - i * 0.03})`, animation: `ringPulse 5s ${i * 1.25}s ease-in-out infinite` }} />
          ))}

          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
               style={{ background: 'radial-gradient(circle at top right, rgba(245,130,13,0.1), transparent)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
               style={{ background: 'radial-gradient(circle at bottom left, rgba(245,80,0,0.07), transparent)' }} />

          <div className="relative z-10">
            <div className="flex justify-center mb-5"><XsLogo size={64} /></div>
            <h2 className="font-display tracking-wide text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              РУХАЙСЯ ВПЕРЕД —<br />
              <span className="text-xs-gradient">БЕЗ ЗУПИНОК</span>
            </h2>
            <p className="text-xs-light text-base max-w-md mx-auto leading-relaxed mb-10 font-light">
              XS™ — для тих, хто живе на повну. Обери свій формат і відчуй різницю.
            </p>
            <button onClick={onShopClick} className="btn-primary" style={{ fontSize: '0.9rem', padding: '14px 40px' }}>
              Переглянути продукти
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
