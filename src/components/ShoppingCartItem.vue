<template>
  <div class="shopping-cart-item">
    <div>
      <div>Item</div>
      <div class="shopping-cart-item__item">
        <img :src="item.image" :alt="item.title" />
        <div>Brand {{ item.brand }} / {{ item.title }}</div>
      </div>
    </div>
    <div class="shopping-cart-item__info">
      <div class="shopping-cart-item__cell">
        <div>Price</div>
        <div>{{ item.regular_price.value }} {{ item.regular_price.currency }}</div>
      </div>
      <div class="shopping-cart-item__cell">
        <div>Qty</div>
        <div>
          <input v-model="modelQuantity" type="number" min="1" max="10" />
          max. 10
        </div>
      </div>
      <div class="shopping-cart-item__cell">
        <div>Total</div>
        <div>{{ total }} {{ item.regular_price.currency }}</div>
      </div>
    </div>
    <button class="shopping-cart-item__remove" @click="shoppingCartStore.remove(item.id)">
      <img alt="remove" src="@/assets/trash.svg" height="24" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { useShoppingCartStore, type ShoppingCartItem } from '@/stores/shoppingCart'
import { computed } from 'vue'

const shoppingCartStore = useShoppingCartStore()

interface Props {
  item: ShoppingCartItem
}
const props = defineProps<Props>()

const modelQuantity = defineModel('quantity', {
  type: Number,
  required: true,
})

const total = computed(() => (modelQuantity.value * props.item.regular_price.value).toFixed(2))
</script>

<style scoped lang="scss">
.shopping-cart-item {
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  gap: 20px;
  padding: 5px;

  border-bottom: 1px solid var(--color-text);

  &__item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 20px;
    align-items: center;
  }

  &__remove {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--color-text);

    align-self: center;
  }

  &__cell {
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 20px;
  }

  @media (width < 1024px) {
    grid-template-columns: 1fr auto;

    &__info {
      grid-template-columns: repeat(3, 1fr);
      grid-column: 2 span;
    }

    &__remove {
      grid-area: 2 / 3 / 1 / 2;
    }
  }
}
</style>
