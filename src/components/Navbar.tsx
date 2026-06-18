import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import XsLogo from './XsLogo'

interface NavbarProps { onShopClick: () => void }

const LINKS = [
  { label: 'Про XS™',  href: '#what-is-xs' },
]

export default function Navbar({ onShopClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-xs-black/95 backdrop-blur-md border-b border-xs-border py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <XsLogo size={36} />
          <span className="font-display text-2xl tracking-widest text-white">XS™</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <button onClick={onShopClick} className="btn-primary" style={{ padding: '10px 24px' }}>
            Продукти
          </button>
        </div>
        <button onClick={() => setOpen(o => !o)} className="md:hidden text-xs-light p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-xs-dark border-t border-xs-border px-6 pb-5 flex flex-col">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="py-3 text-sm text-xs-light border-b border-xs-border no-underline hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onShopClick() }} className="btn-primary mt-4">
            Переглянути продукти
          </button>
        </div>
      )}
    </nav>
  )
}
