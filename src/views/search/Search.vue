<script setup lang="ts">
import { provide, reactive, ref, watch } from 'vue'
import { getHotSearch, Keyword } from '@/apis'
import { SearchStatus } from '@/types'
import SearchHeader from './header/SearchHeader.vue'
import SearchDefault from './default/SearchDefault.vue'
import SearchSearching from './searching/searchSearching.vue'
import SearchResult from './result/SearchResult.vue'

const searchValue = ref<string>('')
const searchStatus = ref<SearchStatus>('default')
const hotKeyword = ref<string>('')
const data = reactive<{ keywords: Keyword[] }>({ keywords: [] })
getHotSearch().then((res) => {
  hotKeyword.value = res.data.keyword
  data.keywords = res.data.keywords
})
const changeSearchStatus = (status: SearchStatus) => {
  searchStatus.value = status
}

provide('searchValue', searchValue)
provide('changeSearchStatus', changeSearchStatus)
watch(
  () => searchValue.value,
  (val) => {
    if (val) {
      changeSearchStatus('searching')
    } else {
      changeSearchStatus('default')
    }
  }
)
</script>
<template>
  <SearchHeader :hot-keyword="hotKeyword" />
  <SearchDefault v-if="searchStatus === 'default'" :keywords="data.keywords" />
  <SearchSearching v-else-if="searchStatus === 'searching'" />
  <SearchResult v-else-if="searchStatus === 'result'" />
</template>
