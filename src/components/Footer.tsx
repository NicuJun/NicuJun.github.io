import { Instagram, Phone, MapPin } from 'lucide-react'
import XsLogo from './XsLogo'
import type { ProductCategory } from '../types'

const PRODUCT_LINKS: { label: string; cat: ProductCategory | 'all' }[] = [
  { label: 'Протеїн. батончики', cat: 'protein-bar'  },
  { label: 'Енерг. батончики',   cat: 'energy-bar'   },
  { label: 'Power Drink',        cat: 'energy-drink'  },
  { label: 'Amino Advantage',    cat: 'sport'         },
  { label: 'Гідролізований протеїн', cat: 'sport'    },
]

const PRICES = [
  { name: 'Power Drink (1 банка)',     price: '46–52 грн'   },
  { name: 'Power Drink (12 банок)',    price: '550–625 грн' },
  { name: 'Протеїн. батончик (1 шт)', price: '113–122 грн' },
  { name: 'Енерг. батончик (14 шт)',  price: '1 580 грн'   },
  { name: 'Amino Advantage',          price: '1 800 грн'   },
]

function goToFilter(cat: ProductCategory | 'all') {
  window.dispatchEvent(new CustomEvent('xs:filter', { detail: cat }))
  setTimeout(() => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}

export default function Footer() {
  return (
    <footer className="border-t border-xs-border pt-14 pb-8 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <XsLogo size={36} />
              <span className="font-display text-2xl tracking-widest text-white">XS™</span>
            </div>
            <p className="text-xs-muted text-sm leading-relaxed font-light mb-5">
              Енергія без компромісів. Для тих, хто рухається вперед і не зупиняється на досягнутому.
            </p>

            <div className="flex flex-col gap-2 mb-5">
              {[
                { handle: 'xseurope', url: 'https://www.instagram.com/xseurope?igsh=MWF3YzFlbGhxNmZ4bA==' },
                { handle: 'xsnation', url: 'https://www.instagram.com/xsnation?igsh=MXFuZmpnM3FzNTFhaA==' },
              ].map(({ handle, url }) => (
                <a key={handle} href={url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-xs-muted hover:text-white transition-colors no-underline text-sm">
                  <Instagram size={13} style={{ color: '#f5820d' }} />
                  @{handle}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {['+380953243657', '+380951527909'].map(phone => (
                <a key={phone} href={`tel:${phone}`}
                  className="flex items-center gap-2 text-xs-muted hover:text-white transition-colors no-underline text-sm">
                  <Phone size={13} style={{ color: '#f5820d' }} />
                  {phone.replace('+38', '+38 ').replace(/(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 $2 $3 $4')}
                </a>
              ))}
              <div className="flex items-center gap-2 text-xs-muted text-sm">
                <MapPin size={13} style={{ color: '#f5820d' }} />
                вул. Сіді Таль, 5
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">Продукти</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map(({ label, cat }) => (
                <li key={label}>
                  <button
                    onClick={() => goToFilter(cat)}
                    className="text-sm text-xs-muted hover:text-white transition-colors font-light text-left"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div />

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">Ціни</h4>
            <div className="flex flex-col gap-1.5">
              {PRICES.map(({ name, price }) => (
                <div key={name} className="flex justify-between items-center gap-3 py-2 border-b border-xs-border/40">
                  <span className="text-xs text-xs-muted font-light leading-snug">{name}</span>
                  <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#f5d020' }}>{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  )
}