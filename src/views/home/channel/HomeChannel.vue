<script setup lang="ts">
import { getVideos } from '@/apis'
import { watchEffect } from 'vue'
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
  <div style="margin-top: 40px">Channel View</div>
</template>
<style scoped>
.channel-container {
  padding-top: 66px;
}
</style>
