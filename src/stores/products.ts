import { defineStore } from 'pinia';

import { productItems } from '../constants'
import type {ProductState, Product} from '../types/product'

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
    getById(id: any): Product | undefined {
      const index = this.items.findIndex((item: Product) => item.id === id)
      return index !== -1 ? this.items[index] : undefined;
    }
  },
});
