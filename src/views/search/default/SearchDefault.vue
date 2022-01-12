<script setup lang="ts">
import { Keyword } from '@/apis'
import HotSearch from './HotSearch.vue'
import SearchHistory from './SearchHistory.vue'

defineProps<{ keywords: Keyword[] }>()
</script>
<template>
  <HotSearch :keywords="keywords" />
  <SearchHistory />
</template>
