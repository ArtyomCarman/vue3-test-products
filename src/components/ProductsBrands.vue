<template>
  <div class="products-brands">
    <BrandItem v-model="isAllBrandsSelected" :indeterminate="isIndeterminate" label="All Brands" />
    <div class="products-brands__list">
      <BrandItem
        v-for="brand in brands"
        :key="brand.id"
        v-model="selectedBrands"
        :value="brand.id"
        :label="brand.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBrandsListStore } from '@/stores/brandsList'
import BrandItem from './BrandItem.vue'
import { storeToRefs } from 'pinia'

const brandsListStore = useBrandsListStore()

const { isAllBrandsSelected, isIndeterminate, selectedBrands, brands } =
  storeToRefs(brandsListStore)
</script>
<style scoped lang="scss">
.products-brands {
  position: sticky;
  top: 20px;

  background-color: var(--color-background);
  padding-inline: 20px;

  display: grid;
  gap: 10px;

  border-right: 1px solid var(--color-text);

  &__list {
    margin-left: 20px;

    display: grid;
    gap: 10px;
  }

  @media (width < 1024px) {
    top: 0px;
    border-right: none;
    padding-inline: 0;
    padding: 5px;

    &__list {
      margin-left: 0;

      grid-auto-flow: column;
      grid-auto-columns: max-content;
      overflow-y: auto;
    }
  }
}
</style>
