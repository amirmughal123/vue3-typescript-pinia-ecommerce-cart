import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useProductStore } from '../products'

describe('The products store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Products list', () => {
    const productStore = useProductStore()
    const products = productStore.fetchAll()
    console.log('PRODUCTS ==', products)
    // expect(products).toBe(4)
  })
})