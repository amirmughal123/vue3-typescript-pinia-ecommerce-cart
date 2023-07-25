import { defineStore } from 'pinia';

import type { CartState, CartProduct } from '../types/cart'

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    items: [],
  }),

  getters: {
    list(): CartProduct[] {
      return this.items
    }
  },

  actions: {
    addProduct(item: CartProduct) {
      return this.items.push(item)
    },
    removeProduct(item: CartProduct) {
      const index = this.items.findIndex(itm => itm.id === item.id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
