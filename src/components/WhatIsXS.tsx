import { Clock, Sparkles, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const PILLARS = [
  { icon: <Clock size={24} />,    title: 'Енергія 24/7',          desc: 'Повний цикл продуктів — від ранкового фокусу до вечірнього відновлення.' },
  { icon: <Sparkles size={24} />, title: 'Тільки чистий результат', desc: 'Усе, що потрібно для активного життя — без цукру, без зайвих калорій, без компромісів.' },
  { icon: <Users size={24} />,    title: 'Стиль життя #XSNation',  desc: 'Бренд для тих, хто поєднує роботу, спорт, подорожі та вечірки й хоче скрізь встигати.' },
]

const DRINK_BENEFITS = [
  '0% цукру та мінімум калорій — для тих, хто стежить за фігурою',
  'Високий вміст вітамінів групи B — підтримка метаболізму та когнітивних функцій',
  'Натуральний кофеїн і таурин — швидкий фокус без «цукрових ям»',
  'Смакова різноманітність — приємні фруктові мікси, а не «хімія»',
]

const BAR_BENEFITS = [
  'Смачно, як десерт — справжній шоколад чи карамель без шкоди для фігури',
  'Рятує від голоду — швидко насичує в офісі, авто чи після спортзалу',
  'Тільки чистий білок — ростить мʼязи, а не жир на талії',
  'Нуль почуття провини — солодко, але майже без цукру',
]

export default function WhatIsXS() {
  const heading = useReveal()
  const pillars = useReveal()
  const compare = useReveal()

  return (
    <section id="what-is-xs" className="py-28 px-6" style={{ background: '#080808' }}>
      <div className="max-w-5xl mx-auto">

        <div ref={heading.ref} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-5"
               style={{ border: '1px solid rgba(245,130,13,0.3)', background: 'rgba(245,130,13,0.06)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>Знайомство</span>
          </div>
          <h2 className="font-display tracking-wide text-white mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            ЩО ТАКЕ <span className="text-xs-gradient">XS™?</span>
          </h2>
          <p className="text-xs-light text-base leading-relaxed max-w-xl mx-auto font-light">
            Більше, ніж бренд. Це повна екосистема енергії та харчування для людей, які живуть на повну.
          </p>
        </div>

        <div ref={pillars.ref} className="reveal grid md:grid-cols-3 gap-5 mb-20">
          {PILLARS.map(p => (
            <div key={p.title} className="xs-card p-7 text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                   style={{ background: 'rgba(245,130,13,0.1)', border: '1px solid rgba(245,130,13,0.2)', color: '#f5820d' }}>
                {p.icon}
              </div>
              <h3 className="font-display text-xl text-white tracking-wide mb-2.5">{p.title}</h3>
              <p className="text-xs-muted text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        <div ref={compare.ref} className="reveal grid md:grid-cols-2 gap-6">
          <div className="xs-card-accent p-8">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold text-xs-gradient">Power Drink</div>
            <h3 className="font-display text-2xl text-white tracking-wide mb-4">Лайфстайл у банці</h3>
            <p className="text-xs-muted text-sm font-light leading-relaxed mb-5">
              Це не просто напої — це лайфстайл для тих, хто витискає з життя максимум.
            </p>
            <div className="space-y-3">
              {DRINK_BENEFITS.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5" style={{ color: '#f5820d' }}>✓</span>
                  <span className="text-xs-light text-sm font-light leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="xs-card p-8">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: '#f5820d' }}>Протеїнові батончики</div>
            <h3 className="font-display text-2xl text-white tracking-wide mb-4">Десерт без провини</h3>
            <p className="text-xs-muted text-sm font-light leading-relaxed mb-5">
              Смачно, як десерт — але працює на твої цілі, а не проти них.
            </p>
            <div className="space-y-3">
              {BAR_BENEFITS.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5" style={{ color: '#f5820d' }}>✓</span>
                  <span className="text-xs-light text-sm font-light leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
