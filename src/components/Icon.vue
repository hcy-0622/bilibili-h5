<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ icon: string }>()
const href = computed(() => `#icon-${props.icon}`)
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="href" />
  </svg>
</template>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
