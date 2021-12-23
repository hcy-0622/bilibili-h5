<script setup lang="ts">
import Header from '@/components/Header.vue'
import TabBar from '@/components/tabs/TabBar.vue'
</script>
<template>
  <Header />
  <TabBar />
  <router-view></router-view>
</template>
