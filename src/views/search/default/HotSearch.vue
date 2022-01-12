<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Keyword } from '@/apis'
import { SEARCH_HISTORY_STORAGE_KEY } from '@/constants'
import { inject, Ref } from 'vue'
import { ChangeSearchStatus } from '@/types'
// import useSearchHistory from './useSearchHistory'

defineProps<{ keywords: Keyword[] }>()
const router = useRouter()
// const { getSearchHistory } = useSearchHistory()
const searchValue = inject<Ref<string>>('searchValue')
const changeSearchStatus = inject<ChangeSearchStatus>('changeSearchStatus')
const itemClick = (k: Keyword) => {
  // 处理缓存
  const searchKeywordsHistoryStorage = localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)
  let searchKeywordsHistory: string[] = searchKeywordsHistoryStorage ? JSON.parse(searchKeywordsHistoryStorage) : []
  const idx = searchKeywordsHistory.findIndex((v) => v === k.keyword)
  if (idx !== 0) {
    if (idx !== -1) {
      searchKeywordsHistory = searchKeywordsHistory.filter((v) => v !== k.keyword)
    }
    searchKeywordsHistory.unshift(k.keyword)
    localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(searchKeywordsHistory))
    // getSearchHistory()
  }

  if (searchValue) {
    searchValue.value = k.keyword
  }
  changeSearchStatus && changeSearchStatus('result')
  router.push(`/search?keyword=${k.keyword}`)
}
</script>
<template>
  <div class="hot-container">
    <h4>大家都在搜</h4>
    <ul class="hot-list">
      <li v-for="k of keywords" :key="k.id" class="hot-item" @click="itemClick(k)">
        {{ k.keyword }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.hot-container {
  padding: 0 20px;
}
.hot-container h4 {
  font-size: 27px;
  margin: 20px 0;
  color: #999;
  font-weight: normal;
}
.hot-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.hot-item {
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  color: #505050;
  margin-right: 24px;
  margin-bottom: 24px;
  font-size: 26px;
}
</style>
