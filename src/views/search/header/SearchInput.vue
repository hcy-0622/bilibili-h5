<script setup lang="ts">
import Icon from '@/components/Icon.vue'

const props = defineProps<{ modelValue?: string; placeholder: string }>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'enter', value: string): void
}>()
const onInput = (event: Event) => {
  const value = (<HTMLInputElement>event.target).value
  emit('update:modelValue', value)
}
const onKeypress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const val = props.modelValue ? props.modelValue : props.placeholder
    emit('enter', val)
  }
}
</script>
<template>
  <div class="search-container">
    <Icon class="search-icon" icon="search" />
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput($event)"
      @keypress="onKeypress($event)"
    />
  </div>
</template>
<style scoped>
.search-container {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f4f4f4;
  padding: 10px 0;
}
.search-icon {
  flex-shrink: 0;
  padding: 0 10px 0 20px;
  /* box-sizing: border-box; */
  color: #a0a0a0;
  font-size: 36px;
}
.search-container > input {
  outline: none;
  border: none;
  background: transparent;
  flex: auto;
  color: #505050;
  font-size: 26px;
}
</style>
