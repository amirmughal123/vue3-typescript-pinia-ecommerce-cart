<template>
  <div
    class="my-8 rounded border-2 border-gray bg-white duration-300 hover:-translate-y-1"
  >
    <div class="p-4">
      <!-- Title -->
      <p
        class="text-sm mb-2 font-bold leading-relaxed text-gray-800 dark:text-gray-800">
        <!-- Post Title -->
        Title
      </p>
      <!-- Description -->
      <small
        class="leading-5 text-gray-500 dark:text-gray-400">
        Description
      </small>
      <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
        <p class="font-bold text-xl">65 $</p>
        <button
          class="px-6 py-2 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>