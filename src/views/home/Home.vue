<script setup lang="ts">
import { reactive } from 'vue'
import { getVideos, Video as IVideo } from '@/apis'
import Video from '@/components/Video.vue'

const data = reactive<{ recommendVideos: IVideo[] }>({
  recommendVideos: [],
})
getVideos().then((res) => {
  data.recommendVideos = res.data
})
console.log(data)
</script>
<template>
  <div>
    <ul class="rv-list">
      <li v-for="rv of data.recommendVideos" :key="rv.id" class="rv-item">
        <Video :title="rv.title" :play-count="rv.play_count" :barrage-count="rv.barrage_count" :cover="rv.cover" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.rv-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 0;
  margin: 16px 8px;
}
.rv-item {
  padding: 0 8px;
}
</style>
