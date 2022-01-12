import request from '@/utils/request'

const prefix = '/api/v1'
export interface Category {
  id: number
  name: string
  children?: Category[]
}

export interface Video {
  id: number
  title: string
  play_count: number
  barrage_count: number
  cover: string
}

export interface Keyword {
  id: number
  keyword: string
}

export function getCategories() {
  return request.get<Category[]>(`${prefix}/categories`)
}

export function getVideos(categoryId?: number, subcategoryId?: number) {
  return request.get<Video[]>(`${prefix}/videos`, {
    params: { categoryId, subcategoryId },
  })
}

export function getHotSearch() {
  return request.get<{ keyword: string; keywords: Keyword[] }>(`${prefix}/hot_search`)
}
