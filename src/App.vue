<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Header } from '@/components/shared'


</script>

<template>
  <Header />
  <div class="container max-w-screen-lg mx-auto px-5">
    <RouterView />
  </div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
