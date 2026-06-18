import { useState } from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import WhatIsXS      from './components/WhatIsXS'
import About         from './components/About'
import ProductSlider from './components/ProductSlider'
import Products      from './components/Products'
import Benefits      from './components/Benefits'
import CTA           from './components/CTA'
import Footer        from './components/Footer'
import Toast         from './components/Toast'
import type { ToastState } from './types'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [toast] = useState<ToastState>({ visible: false, message: '' })

  return (
    <>
      <Navbar onShopClick={() => scrollTo('products')} />
      <main>
        <Hero          onShopClick={() => scrollTo('products')} />
        <WhatIsXS />
        <About />
        <ProductSlider />
        <Products />
        <Benefits />
        <CTA           onShopClick={() => scrollTo('products')} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
