<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        Shopping Cart
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div class="relative">
          <button @click="handleCart()" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Cart ({{ products.length }})
            <ChevronDownIcon v-if="isOpen" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            <ChevronUpIcon v-else class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </button>
          <div
            class="absolute -left-48 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            :class="{ hidden: !isOpen}"
          >
            <div class="p-4">
              <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div class="flex-auto flex justify-between align-middle">
                  <div>
                    <a class="block font-semibold text-gray-900">
                      {{ item.name.toUpperCase() }}<span class="text-gray-400 ml-1">({{ item.quantity  }})</span>
                      <span class="absolute inset-0" />
                    </a>
                  </div>
                  <button
                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded cursor-pointer z-10"
                    @click="cartStore.removeProduct(item)"
                  >
                    <ArchiveBoxIcon class="h-5 w-5 inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronDownIcon, ChevronUpIcon, ArchiveBoxIcon } from '@heroicons/vue/20/solid'

import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const products = computed(() => cartStore.list)

const isOpen = ref<boolean>(false)

const handleCart = () => {
  isOpen.value = !isOpen.value
}

</script>