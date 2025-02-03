<template>
  <header class="app-header">
    <RouterLink to="/">
      <img alt="logo" src="@/assets/logo.png" />
    </RouterLink>
    <RouterLink to="/shopping-cart">
      <ShoppingCartIcon />
    </RouterLink>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ShoppingCartIcon from '@/components/ShoppingCartIcon.vue'
</script>
<style scoped lang="scss">
.app-header {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  border-bottom: 1px solid var(--color-text);
}
</style>
