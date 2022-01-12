<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import useSearchHistory from './useSearchHistory'

const { data, clearSearchHistory } = useSearchHistory()
</script>
<template>
  <div class="history-container">
    <h4>历史搜索</h4>
    <ul class="history-list">
      <li v-for="k of data.searchHistory" :key="k" class="history-item">
        <Icon class="keyword-icon" icon="time" />
        <span class="keyword-text">{{ k }}</span>
      </li>
    </ul>
    <div class="clear-history">
      <button class="clear-history-btn" @click="clearSearchHistory">清除历史记录</button>
    </div>
  </div>
</template>
<style scoped>
.history-container {
  border-top: 20px solid #f4f4f4;
  padding: 0 20px;
}
.history-container h4 {
  font-size: 27px;
  margin: 30px 0;
  color: #999;
  font-weight: normal;
}
.history-list {
  list-style: none;
  padding: 0;
}
.history-item {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}
.history-item .keyword-text {
  margin-left: 20px;
  color: #505050;
}
.history-item .keyword-icon {
  color: #999;
}
.clear-history {
  text-align: center;
}
.clear-history-btn {
  outline: none;
  border: none;
  background: transparent;
  color: #999;
  font-size: 28px;
}
</style>
