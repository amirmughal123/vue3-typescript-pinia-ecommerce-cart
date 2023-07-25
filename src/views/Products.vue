<template>
  <div
    class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  >
    <div v-for="item in products">
      <CardItem :handleAddItem="handleAddItemToCart" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { CardItem } from '../components/shared'

import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()

const products = computed(() => productStore.list)

const handleAddItemToCart = (item) => {
  cartStore.addProduct({ 
    id: item.id,
    name: item.name,
    price: item.details.price,
    quantity: 1
  })
}

onMounted(() => {
  productStore.fetchAll()
})

</script>