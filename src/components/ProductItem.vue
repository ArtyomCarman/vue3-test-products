<template>
  <div class="product-item">
    <img :src="product.image" alt="product" class="product-item__image" />

    <div>{{ product.title }}</div>
    <div>{{ product.brand }}</div>
    <div>{{ `${product.regular_price.value} ${product.regular_price.currency}` }}</div>
    <button
      v-if="!isInShoppingCart"
      class="product-item__add"
      @click="shoppingCartStore.add(product)"
    >
      Add To Cart
    </button>
    <button v-else class="product-item__remove" @click="shoppingCartStore.remove(product.id)">
      Delete from Cart
    </button>
  </div>
</template>
<script setup lang="ts">
import type { Product } from '@/data/fakeProducts'
import { useShoppingCartStore } from '@/stores/shoppingCart'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const shoppingCartStore = useShoppingCartStore()
const { shoppingCart } = storeToRefs(shoppingCartStore)

const isInShoppingCart = computed(() =>
  shoppingCart.value.some((item) => item.id === props.product.id),
)
</script>
<style scoped lang="scss">
.product-item {
  display: grid;
  gap: 5px;
  opacity: 1;
  transition: all 0.9s ease;

  @starting-style {
    opacity: 0;
    translate: 0 20px;
  }

  &__image {
    max-width: 100%;
  }

  &__add,
  &__remove {
    border-radius: 4px;
    border: none;
    padding: 5px 10px;
    color: white;
    font-weight: bold;
  }

  &__add {
    background-color: green;
  }

  &__remove {
    background-color: red;
  }
}
</style>
