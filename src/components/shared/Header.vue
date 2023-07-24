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
                <div class="flex-auto">
                  <a :href="item.href" class="block font-semibold text-gray-900">
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </a>
                  <p class="mt-1 text-gray-600">{{ item.description }}</p>
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
import { ref } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
]

const isOpen = ref<boolean>(false)

const handleCart = () => {
  isOpen.value = !isOpen.value
}

</script>