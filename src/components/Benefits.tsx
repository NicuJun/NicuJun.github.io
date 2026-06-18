import { Zap, Shield, Target, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BENEFITS = [
  { icon: <Zap size={22} />,    title: 'Стабільна енергія',    tag: 'Для всіх',       desc: 'Без «цукрових гойдалок». Вітаміни групи B і C підтримують рівномірний рівень енергії впродовж усього дня.' },
  { icon: <Target size={22} />, title: 'Максимум фокусу',      tag: 'Продуктивність', desc: 'Кофеїн і таурин загострюють концентрацію саме тоді, коли це потрібно: на тренуванні, роботі чи вечірці.' },
  { icon: <Shield size={22} />, title: 'Чистий склад',         tag: 'Здоровʼя',       desc: '0 г цукру, без глютену і штучних барвників. Тільки те, що реально працює. Нуль порожніх калорій.' },
  { icon: <Users size={22} />,  title: 'Для спорту та життя', tag: 'Спорт',           desc: '15–20 г білка в батончиках, EAA-комплекс і гідролізований протеїн — рішення для спортсменів і активних людей.' },
]


export default function Benefits() {
  const heading = useReveal()
  const grid = useReveal()

  return (
    <section id="benefits" className="py-28 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={heading.ref} className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-5"
               style={{ border: '1px solid rgba(245,130,13,0.3)', background: 'rgba(245,130,13,0.06)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>Переваги XS™</span>
          </div>
          <h2 className="font-display tracking-wide text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            ЧОМУ XS™ — <span className="text-xs-gradient">КРАЩИЙ ВИБІР</span>
          </h2>
        </div>

        <div ref={grid.ref} className="reveal grid md:grid-cols-2 gap-5">
          {BENEFITS.map(b => (
            <div key={b.title} className="xs-card p-7 flex gap-5">
              <div className="w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(245,130,13,0.1)', border: '1px solid rgba(245,130,13,0.2)', color: '#f5820d' }}>
                {b.icon}
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: '#f5820d' }}>{b.tag}</div>
                <h3 className="font-display text-xl text-white tracking-wide mb-1.5">{b.title}</h3>
                <p className="text-xs-muted text-sm leading-relaxed font-light">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
