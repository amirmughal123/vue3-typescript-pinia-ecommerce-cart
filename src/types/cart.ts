export interface CartProduct {
  id: string
  name: string
  quantity: string
  price: number
}

export interface CartState {
  items: CartProduct[]
}
