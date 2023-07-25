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
  },
});
