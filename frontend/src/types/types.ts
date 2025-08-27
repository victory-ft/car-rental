export interface Car {
  id: number
  brand: string
  model: string
  type: string
  year: number
  pricePerDay: number
  fuel: string
  transmission: string
  capacity: number
  range: number
  images: Array<string>
  description: string
  available: boolean
  location: string
  features: Array<string>
  popular: boolean
}
