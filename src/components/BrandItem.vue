<template>
  <label class="brand-item" :class="{ 'brand-item--active': isActive }">
    <input v-model="model" type="checkbox" v-bind="$attrs" />
    <div>{{ label }}</div>
  </label>
</template>
<script setup lang="ts">
import { computed, useAttrs, type PropType } from 'vue'

interface Props {
  label: string
}
defineProps<Props>()
const model = defineModel({
  type: [Boolean, Array] as PropType<boolean | number[]>,
  required: true,
})

const attrs = useAttrs()

const isActive = computed(() => {
  if (Array.isArray(model.value)) {
    return !!model.value.find((item) => item === attrs.value)
  }

  return model.value
})
</script>
<style scoped lang="scss">
.brand-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  padding: 5px;
  cursor: pointer;

  &--active {
    background-color: var(--color-background-mute);
  }
}
</style>
