export type ProductCategory = 'protein-bar' | 'energy-bar' | 'energy-drink' | 'sport'

export interface NutritionFact {
  label: string
  value: string
  highlight?: boolean
}

export interface Product {
  id: number
  cat: ProductCategory
  name: string
  tagline: string
  desc: string
  weight: string
  accentColor: string
  badge?: string
  image?: string
  priceOne?: string
  pricePack?: string
  packLabel?: string
  nutrition: NutritionFact[]
}

export interface ToastState {
  visible: boolean
  message: string
}
