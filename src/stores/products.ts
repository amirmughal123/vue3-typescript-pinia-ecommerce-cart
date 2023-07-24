import { defineStore } from 'pinia';

import { productItems } from '../constants'

interface ProductDetail {
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
  detail: ProductDetail
}

interface ProductState {
  items: Product[]
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    items: [],
  }),

  getters: {
    list(): Product[] {
      return this.items
    }
  },

  actions: {
    fetchAll() {
      this.items = productItems
    },
  },
});
