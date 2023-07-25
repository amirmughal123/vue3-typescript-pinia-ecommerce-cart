export interface ProductDetail {
  id: string
  description: string
  price: number
  company: string
  dob: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: number
  name: string
  details: ProductDetail
}

export interface ProductState {
  items: Product[]
}