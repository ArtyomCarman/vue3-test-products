import { fakeBrands } from '@/data/fakeBrands'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useBrandsListStore = defineStore('brandsList', () => {
  const brands = ref(fakeBrands)
  const selectedBrands = ref<number[]>(brands.value.map(({ id }) => id))

  const isAllBrandsSelected = computed({
    get() {
      return brands.value.length === selectedBrands.value.length
    },
    set(value) {
      selectedBrands.value = value ? brands.value.map(({ id }) => id) : []
    },
  })

  const isIndeterminate = computed(() => {
    if (!selectedBrands.value.length) return false

    return !isAllBrandsSelected.value
  })

  return { brands, selectedBrands, isAllBrandsSelected, isIndeterminate }
})
