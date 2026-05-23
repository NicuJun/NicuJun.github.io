import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { PRODUCTS } from '../data/products'
import type { Product, ProductCategory } from '../types'

type FilterOption = 'all' | ProductCategory

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: 'all',          label: 'Всі' },
  { value: 'protein-bar',  label: 'Протеїн. батончики' },
  { value: 'energy-bar',   label: 'Енерг. батончики' },
  { value: 'energy-drink', label: 'Power Drink' },
  { value: 'sport',        label: 'Спортхарч' },
]

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="flex flex-col h-full relative overflow-hidden"
      style={{
        background: '#141414',
        borderRadius: '16px',
        border: hovered ? `1px solid ${product.accentColor}88` : '1px solid #222',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 0 0 1px ${product.accentColor}44, 0 0 32px ${product.accentColor}20`
          : 'none',
      }}
    >
      <div className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
           style={{
             opacity: hovered ? 1 : 0,
             background: `radial-gradient(circle 180px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 70%)`,
             zIndex: 1,
           }} />

      <div className="relative overflow-hidden rounded-t-2xl flex-shrink-0"
           style={{
             height: '220px',
             background: `radial-gradient(ellipse 100% 80% at 50% 110%, ${product.accentColor}70 0%, ${product.accentColor}20 50%, #0a0a0a 100%)`,
           }}>
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
             style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse 70% 50% at 50% 90%, ${product.accentColor}50 0%, transparent 70%)` }} />

        {product.image ? (
          <img src={product.image} alt={`${product.name} — ${product.tagline}`}
               className="w-full h-full object-contain relative z-10"
               style={{
                 padding: '12px',
                 transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                 transform: hovered ? 'scale(1.08) translateY(-4px)' : 'scale(1) translateY(0)',
                 filter: hovered ? `drop-shadow(0 8px 16px ${product.accentColor}60)` : 'none',
               }} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative z-10">
            <span className="font-display text-4xl text-xs-gradient">XS™</span>
            <span className="text-xs text-xs-muted text-center px-4">{product.tagline}</span>
          </div>
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded z-20"
                style={{ background: 'linear-gradient(135deg,#f5d020,#f5820d)', color: '#080808' }}>
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded z-20"
              style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', color: '#bbb' }}>
          {product.weight}
        </span>
        <div className="absolute bottom-0 left-0 right-0 transition-all duration-300"
             style={{ height: hovered ? '2px' : '1px', background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)`, boxShadow: hovered ? `0 0 8px ${product.accentColor}` : 'none' }} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <div className="text-xs text-xs-muted uppercase tracking-widest mb-1 font-medium">{product.tagline}</div>
        <h3 className="font-display text-xl text-white tracking-wide mb-2 leading-tight">{product.name}</h3>
        <p className="text-xs-muted text-sm leading-relaxed mb-4 font-light flex-1">{product.desc}</p>

        {/* Price */}
        {(product.priceOne || product.pricePack) && (
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {product.priceOne && (
              <div className="flex flex-col">
                <span className="text-xs text-xs-muted font-light">1 шт</span>
                <span className="font-display text-xl" style={{ color: '#f5d020' }}>{product.priceOne}</span>
              </div>
            )}
            {product.pricePack && (
              <>
                <div className="w-px h-8 bg-xs-border" />
                <div className="flex flex-col">
                  <span className="text-xs text-xs-muted font-light">{product.packLabel}</span>
                  <span className="font-display text-xl" style={{ color: '#f5820d' }}>{product.pricePack}</span>
                </div>
              </>
            )}
          </div>
        )}

        <button onClick={() => setExpanded(e => !e)}
                className="flex items-center gap-1.5 text-xs font-medium mb-2 uppercase tracking-wide transition-colors duration-200"
                style={{ color: hovered ? '#f5d020' : '#f5820d' }}>
          {expanded ? <><ChevronUp size={12} />Сховати склад</> : <><ChevronDown size={12} />Харчова цінність</>}
        </button>

        <div style={{ overflow: 'hidden', maxHeight: expanded ? '200px' : '0px', opacity: expanded ? 1 : 0, transition: 'max-height 0.35s ease, opacity 0.25s ease' }}>
          <div className="rounded-xl p-3 mb-1 border border-xs-border grid grid-cols-2 gap-x-4 gap-y-2"
               style={{ background: 'rgba(0,0,0,0.4)' }}>
            {product.nutrition.map(n => (
              <div key={n.label} className="flex justify-between items-center gap-2">
                <span className="text-xs text-xs-muted truncate">{n.label}</span>
                <span className={`text-xs font-semibold whitespace-nowrap ${n.highlight ? 'nutr-highlight' : 'text-xs-light'}`}>
                  {n.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimatedGrid({ products }: { products: Product[] }) {
  const [displayed, setDisplayed] = useState(products)
  const [opacity,   setOpacity]   = useState(1)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    setOpacity(0)
    timer.current = setTimeout(() => { setDisplayed(products); setOpacity(1) }, 200)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [products])

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
         style={{ transition: 'opacity 0.22s ease', opacity }}>
      {displayed.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default function Products() {
  const [active, setActive] = useState<FilterOption>('all')
  const heading = useReveal()
  const tabs    = useReveal()
  const grid    = useReveal()

    useEffect(() => {
    const handler = (e: Event) => {
      setActive((e as CustomEvent<FilterOption>).detail)
    }
    window.addEventListener('xs:filter', handler)
    return () => window.removeEventListener('xs:filter', handler)
  }, [])

  const filtered = PRODUCTS.filter(p => active === 'all' || p.cat === active)

  return (
    <section id="products" className="py-28 px-6" style={{ background: '#080808' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={heading.ref} className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-5"
               style={{ border: '1px solid rgba(245,130,13,0.3)', background: 'rgba(245,130,13,0.06)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5820d' }}>Лінійка XS™</span>
          </div>
          <h2 className="font-display tracking-wide text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            ВИБЕРИ СВІЙ <span className="text-xs-gradient">ФОРМАТ</span>
          </h2>
          <p className="text-xs-muted text-sm max-w-md mx-auto font-light leading-relaxed">
            Від протеїнових батончиків до преміального спортивного харчування — є рішення для кожної цілі.
          </p>
        </div>

        <div ref={tabs.ref} className="reveal flex gap-2 justify-center flex-wrap mb-10">
          {FILTERS.map(f => (
            <button key={f.value} onClick={() => setActive(f.value)}
                    className="px-5 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                    style={active === f.value
                      ? { background: 'linear-gradient(135deg,#f5d020,#f5820d)', color: '#080808', border: '1px solid transparent', boxShadow: '0 4px 16px rgba(245,130,13,0.35)' }
                      : { background: 'transparent', color: '#777', border: '1px solid #252525' }}>
              {f.label}
            </button>
          ))}
        </div>

        <div ref={grid.ref} className="reveal">
          <AnimatedGrid products={filtered} />
        </div>
      </div>
    </section>
  )
}