<script setup lang="ts">
import { getVideos } from '@/apis'
import { watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watchEffect(() => {
  let id = route.params.id ? Number(route.params.id) : undefined
  let subId = route.params.subId ? Number(route.params.subId) : undefined

  getVideos(id, subId).then((res) => {
    console.log(res)
  })
  // console.log(route.params)
})
</script>
<template>
  <div class="channel-container">Channel 页面</div>
</template>
<style scoped>
.channel-container {
  padding-top: 66px;
}
</style>
