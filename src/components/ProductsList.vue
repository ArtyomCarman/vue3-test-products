<template>
  <div v-if="!filteredProductsByBrand.length">
    <h3>No Products</h3>
    <p>Try change brands filters</p>
  </div>
  <div v-else class="products-list">
    <ProductItem v-for="product in filteredProductsByBrand" :key="product.id" :product="product" />
  </div>
</template>
<script setup lang="ts">
import { useProductsListStore } from '@/stores/productsList'
import ProductItem from './ProductItem.vue'
import { storeToRefs } from 'pinia'
import { useBrandsListStore } from '@/stores/brandsList'
import { computed } from 'vue'

const productsListStore = useProductsListStore()
const brandsListStore = useBrandsListStore()
const { products } = storeToRefs(productsListStore)
const { selectedBrands } = storeToRefs(brandsListStore)

const filteredProductsByBrand = computed(() =>
  products.value.filter((product) => selectedBrands.value.includes(product.brand)),
)
</script>
<style scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
