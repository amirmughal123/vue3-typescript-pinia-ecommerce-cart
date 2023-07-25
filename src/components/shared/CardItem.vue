<template>
  <div
    class="my-8 rounded border-2 border-gray bg-white duration-300 hover:-translate-y-1 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex justify-between">
        <p
          class="text-sm mb-2 font-bold leading-relaxed text-gray-800 dark:text-gray-800 cursor-pointer"
          @click="handleDetailPage(item.id)"
        >
          {{ item.name.toUpperCase() }}
        </p>
        <p class="text-sm mb-2 font-bold leading-relaxed text-gray-800 dark:text-gray-800">
          {{ item.details.company.toUpperCase() }}
        </p>
      </div>
      <div class="h-28">
        <small
          class="leading-5 text-gray-500 dark:text-gray-400">
          {{ item.details.description }}
        </small>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-8">
        <p class="font-bold text-xl">{{ item.details.price }} $</p>
        <button
          class="px-6 py-2 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          @click="handleAddItem(item)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Product } from '../../types/product'

import { useRouter } from "vue-router";
const router = useRouter();

const handleDetailPage = (id: string) => {
  router.push({ name: 'Product', params: { id } });
}

defineProps<{
  item: Product
  handleAddItem: Function
}>()

</script>