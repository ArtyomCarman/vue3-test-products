import { fakeProducts } from '@/data/fakeProducts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsListStore = defineStore('productsList', () => {
  const products = ref(fakeProducts)

  return { products }
})
