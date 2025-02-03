import type { Product } from '@/data/fakeProducts'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface ShoppingCartItem extends Product {
  quantity: number
}

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const shoppingCart = ref<ShoppingCartItem[]>([])
  const shoppingCartCount = computed(() => shoppingCart.value.length)

  const add = (value: Product) => shoppingCart.value.push({ ...value, quantity: 1 })
  const remove = (id: Product['id']) => {
    shoppingCart.value = shoppingCart.value.filter((product) => product.id !== id)
  }

  const subTotal = computed(() =>
    shoppingCart.value.reduce((total, item) => total + item.regular_price.value * item.quantity, 0),
  )

  return { shoppingCart, shoppingCartCount, subTotal, add, remove }
})
