<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Tailwind Css Integration</div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
