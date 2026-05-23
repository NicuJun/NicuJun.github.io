import { useReveal } from '../hooks/useReveal'

export default function About() {
  const heading = useReveal()
  const compare = useReveal()
  const stats   = useReveal()

  return (
    <section id="about" className="py-28 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">

        <div ref={heading.ref} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-5"
               style={{ border: '1px solid rgba(245,130,13,0.3)', background: 'rgba(245,130,13,0.06)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>Чому XS™</span>
          </div>
          <h2 className="font-display tracking-wide text-white mb-5"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            РОЗУМНА ЕНЕРГІЯ —<br />
            <span className="text-xs-gradient">НЕ ПРОСТО СПЛЕСК</span>
          </h2>
          <p className="text-xs-light text-base leading-relaxed max-w-xl mx-auto font-light">
            Поки мас-маркет енергетики дають короткий сплеск за рахунок цукру, XS™ діє інакше — стабільна енергія, вітамінний комплекс і нуль порожніх калорій.
          </p>
        </div>

        <div ref={compare.ref} className="reveal grid md:grid-cols-2 gap-6 mb-14">
          <div className="xs-card p-8">
            <div className="text-xs text-xs-muted uppercase tracking-widest mb-6 font-medium">Звичайні енергетики</div>
            <div className="space-y-3.5">
              {['Великі дози цукру','Короткий сплеск і різкий спад','Зайві калорії і вуглеводи','«Цукрові гойдалки» протягом дня','Штучні барвники та ароматизатори'].map(t => (
                <div key={t} className="flex items-center gap-3">
                  <span className="text-red-500 text-sm">✕</span>
                  <span className="text-xs-muted text-sm font-light">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="xs-card-accent p-8">
            <div className="text-xs uppercase tracking-widest mb-6 font-semibold text-xs-gradient">XS™ Power Drink</div>
            <div className="space-y-3.5">
              {['0 г цукру, лише 10 калорій','Стабільна енергія без спадів','Вітаміни B3, B5, B6, B12 + C','Таурин і кофеїн для фокусу','Натуральні ароматизатори'].map(t => (
                <div key={t} className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: '#f5820d' }}>✓</span>
                  <span className="text-white text-sm font-light">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={stats.ref} className="reveal xs-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '0г',  sub: 'доданого цукру' },
              { num: '10',  sub: 'калорій на банку' },
              { num: '67%', sub: 'споживачів відчули ефект' },
              { num: '10+', sub: 'смаків у лінійці' },
            ].map((s, i) => (
              <div key={i} className={i > 0 ? 'border-l border-xs-border' : ''}>
                <div className="stat-num" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>{s.num}</div>
                <div className="text-xs text-xs-muted mt-1 tracking-wide font-light">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
