<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.nettl.com/global/images/PublicShop/ProductSearch/prodgr_default_300.png">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product?.name  }}</h1>
          <p class="leading-relaxed">{{ product?.details?.description }}.</p>
          <div class="flex mt-10">
            <span class="title-font font-medium text-2xl text-gray-900">${{ product?.details?.price }}</span>
            <button
              class="flex ml-auto px-6 py-2 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              @click="handleAddToCart(product)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const productId = ref('');

import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const productStore = useProductStore()
const product = computed(() => productStore.getById(productId.value) || {})

const handleAddToCart = (item) => {
  cartStore.addProduct({ 
    id: item.id,
    name: item.name,
    price: item.details.price,
    quantity: 1
  })
}

watch(() => route.params, (newParams, oldParams) => {
  if (newParams.id !== oldParams.id) {
    productId.value = newParams.id as string;
  }
})

onMounted(() => {
  productId.value = route.params.id as string;
  if(productStore.list.length === 0) {
    productStore.fetchAll()
  }
});

</script>