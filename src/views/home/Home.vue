<script setup lang="ts">
import Header from '@/components/Header.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import StickyButton from '@/components/StickyButton.vue'
</script>
<template>
  <Header />
  <Tabs />
  <router-view></router-view>
  <StickyButton />
</template>
