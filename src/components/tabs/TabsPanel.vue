<script setup lang="ts">
import { Category } from '@/apis'
import Icon from '../Icon.vue'

defineProps<{ visible: boolean; categories: Category[] }>()
const emit = defineEmits<{ (ev: 'update:visible', val: boolean): void }>()
</script>
<template>
  <teleport to="body">
    <transition
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
      <div v-if="visible" class="panel-container">
        <ul class="panel-list">
          <li v-for="c of categories" :key="c.id" class="panel-item">
            {{ c.name }}
          </li>
        </ul>
        <div class="panel-collapse">
          <Icon icon="arrow-down" class="tabs-icon panel-collapse-icon" @click="emit('update:visible', false)" />
        </div>
      </div>
    </transition>
  </teleport>
</template>
<style scoped>
.panel-container {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
}
.panel-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.panel-item {
  padding: 16px 30px;
  white-space: nowrap;
  color: #505050;
  font-size: 28px;
}
.panel-collapse {
  text-align: center;
}
.panel-collapse .panel-collapse-icon {
  transform: rotate(180deg);
}
</style>
