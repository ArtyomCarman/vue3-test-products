<template>
  <div class="shopping-cart">
    <h1>Shopping cart</h1>
    <template v-if="shoppingCart.length">
      <div class="shopping-cart__list">
        <ShoppingCartItem
          v-for="item in shoppingCart"
          :key="item.id"
          v-model:quantity="item.quantity"
          :item="item"
        />
      </div>
      <div class="shopping-cart__total">
        <div class="shopping-cart__subtotal">
          <div>Subtotal:</div>
          <div>${{ fixedSubTotal }}</div>
        </div>
        <button @click="checkout">Checkout</button>
      </div>
    </template>
    <div v-else class="shopping-cart__empty-block">
      <h3>No Products</h3>
      <p>Go to <RouterLink to="/">Catalog</RouterLink></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCart'
import { storeToRefs } from 'pinia'
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import { computed } from 'vue'

const shoppingCartStore = useShoppingCartStore()
const { shoppingCart, subTotal } = storeToRefs(shoppingCartStore)

const fixedSubTotal = computed(() => subTotal.value.toFixed(2))

const checkout = () => alert('checkout')
</script>

<style scoped lang="scss">
.shopping-cart {
  display: grid;
  gap: 20px;

  &__list {
    display: grid;
    gap: 20px;
  }

  &__total {
    justify-self: end;
    display: grid;
    justify-items: end;
  }

  &__subtotal {
    display: flex;
    gap: 10px;
  }

  &__empty-block {
    margin-inline: auto;
  }
}
</style>
