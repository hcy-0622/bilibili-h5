<script setup lang="ts">
import Icon from './Icon.vue'
</script>
<template>
  <div class="sticky-container">
    <button class="sticky-btn">
      <Icon class="sticky-btn-icon" icon="bilibili" />
      <span>打开App，看你感兴趣的视频</span>
    </button>
  </div>
</template>
<style>
.sticky-container {
  position: fixed;
  bottom: 40px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}
.sticky-btn {
  border: none;
  outline: none;
  border-radius: 40px;
  width: 100%;
  /* padding-top: 18px; */
  /* padding-bottom: 18px; */
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sticky-btn-icon {
  font-size: 80px;
  margin-right: 40px;
}
</style>
