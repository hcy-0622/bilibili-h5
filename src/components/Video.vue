<script setup lang="ts">
import { computed } from 'vue'
import { getThousandValueText } from '@/utils'
import Icon from './Icon.vue'

const props = defineProps<{ title: string; cover: string; playCount: number; barrageCount: number }>()
const playCountText = computed(() => getThousandValueText(props.playCount))
const barrageCountText = computed(() => getThousandValueText(props.barrageCount))
</script>
<template>
  <div class="container">
    <div class="cover-container">
      <img :src="cover" alt="" />
      <div class="cover-video">
        <Icon icon="video" />
        <span class="count">{{ playCountText }}</span>
      </div>
      <div class="cover-danmu">
        <Icon icon="danmushu" />
        <span class="count">{{ barrageCountText }}</span>
      </div>
    </div>
    <p>{{ title }}</p>
  </div>
</template>
<style>
.container {
  width: 100%;
}
.cover-container {
  width: 100%;
  position: relative;
  color: #fff;
  border-radius: 8px;
}
.cover-container img {
  width: 100%;
  height: 100%;
}
.cover-video,
.cover-danmu {
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: flex-end;
}
.cover-video .count,
.cover-danmu .count {
  margin-left: 8px;
}
.cover-video {
  left: 20px;
}
.cover-danmu {
  right: 20px;
}
.container > p {
  margin: 10px 0;
}
</style>
