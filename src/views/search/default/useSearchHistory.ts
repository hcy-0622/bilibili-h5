import { reactive } from 'vue'
import { SEARCH_HISTORY_STORAGE_KEY } from '@/constants'

export default function useSearchHistory() {
  const data = reactive<{ searchHistory: string[] }>({
    searchHistory: [],
  })
  const getSearchHistory = () => {
    const searchKeywordsHistoryStorage = localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)
    data.searchHistory = searchKeywordsHistoryStorage ? JSON.parse(searchKeywordsHistoryStorage) : []
  }
  const clearSearchHistory = () => {
    localStorage.removeItem(SEARCH_HISTORY_STORAGE_KEY)
    getSearchHistory()
  }
  getSearchHistory()

  return {
    data,
    getSearchHistory,
    clearSearchHistory,
  }
}
