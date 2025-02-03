<template>
  <main class="product-cart-view">
    <ProductsBrands />
    <div>
      <h1 class="product-cart-view__heading">Catalog</h1>
      <ProductsList />
    </div>
  </main>
</template>
<script setup lang="ts">
import ProductsBrands from '../components/ProductsBrands.vue'
import ProductsList from '../components/ProductsList.vue'
</script>
<style scoped lang="scss">
.product-cart-view {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  align-items: start;

  &__heading {
    margin-bottom: 20px;
  }

  @media (width < 1024px) {
    grid-template-columns: auto;
  }
}
</style>
