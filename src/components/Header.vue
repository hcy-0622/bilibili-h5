<script setup lang="ts">
import Icon from './Icon.vue'
</script>

<template>
  <div class="header">
    <h1 class="header-logo">
      <Icon icon="bilibili" />
    </h1>
    <div class="header-extra">
      <Icon icon="search" />
      <img class="header-avatar" src="../assets/logo.png" />
      <button class="header-download">下载 App</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}
.header-logo {
  margin: 0;
  flex: auto;
  color: var(--primary-color);
  font-size: 120px;
}
.header-extra {
  display: flex;
  align-items: center;
}

.header-avatar {
  width: 48px;
  height: 48px;
  margin: 0 40px;
  border-radius: 50%;
}
.header-download {
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  color: white;
  background-color: var(--primary-color);
}
</style>
