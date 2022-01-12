<script setup lang="ts">
import { inject, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChangeSearchStatus } from '@/types'
import SearchInput from './SearchInput.vue'

defineProps<{ hotKeyword: string }>()
const searchValue = inject<Ref<string>>('searchValue')
const changeSearchStatus = inject<ChangeSearchStatus>('changeSearchStatus')
const router = useRouter()
const enterPress = (val: string) => {
  // if (searchValue) {
  //   searchValue.value = val
  // }
  changeSearchStatus && changeSearchStatus('result')
  router.push(`/search?keyword=${val}`)
}
</script>
<template>
  <div class="container">
    <SearchInput v-model="searchValue" :placeholder="hotKeyword" @enter="enterPress" />
    <button class="cancel-btn">取消</button>
  </div>
</template>
<style scoped>
.container {
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.cancel-btn {
  outline: none;
  border: none;
  background: transparent;
  white-space: nowrap;
  margin-left: 15px;
  color: var(--primary-color);
}
</style>
