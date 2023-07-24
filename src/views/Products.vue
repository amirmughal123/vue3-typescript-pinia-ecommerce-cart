<template>
  <div
    class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  >
    <div v-for="item in products">
      <CardItem :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { CardItem } from '../components/shared'

import { useProductStore } from '@/stores/products'
const productStore = useProductStore()

const products = computed(() => productStore.list)

onMounted(() => {
  productStore.fetchAll()
})

</script>