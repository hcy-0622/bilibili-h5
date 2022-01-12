import { reactive } from 'vue'
import { getCategories, Category } from '@/apis'

type DataProps = { categories: Category[] }
export default function useTabsData(): DataProps {
  const data = reactive<DataProps>({
    categories: [],
  })
  getCategories().then((res) => {
    let list = res.data
    list = list.map((item) => {
      if (item.children) {
        item.children.unshift({ id: -1, name: '推荐' })
      }
      return item
    })
    list.unshift({ id: -1, name: '首页' })
    data.categories = list
  })

  return data
}
