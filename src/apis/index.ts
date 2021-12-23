import request from '@/utils/request'

export interface Category {
  id: number
  name: string
  children?: Category[]
}
export function getCategories() {
  return request.get<Category[]>('/api/v1/categories')
}
