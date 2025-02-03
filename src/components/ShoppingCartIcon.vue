<template>
  <div class="shopping-cart-icon">
    <img
      class="shopping-cart-icon__image"
      alt="shopping-cart"
      src="@/assets/shopping-cart.svg"
      height="35"
    />
    <div v-if="shoppingCartCount > 0" class="shopping-cart-icon__count">
      {{ shoppingCartCount }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCart'
import { storeToRefs } from 'pinia'

const shoppingCartStore = useShoppingCartStore()
const { shoppingCartCount } = storeToRefs(shoppingCartStore)
</script>
<style scoped lang="scss">
.shopping-cart-icon {
  display: grid;
  justify-items: end;
  align-items: start;

  &__image {
    grid-area: -1 / 1;
  }

  &__count {
    grid-area: -1 / 1;
    font-weight: bold;
    border-radius: 50%;
    background-color: purple;
    color: white;
    padding: 2px;
    width: 24px;
    height: 24px;
    display: grid;
    place-content: center;
    transform: translate(10px, -10px);
  }
}
</style>
