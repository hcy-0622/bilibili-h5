import axios from 'axios'

const devUrl = 'http://127.0.0.1:7788'
const prodUrl = 'http://127.0.0.1:3003'

const request = axios.create({
  baseURL: import.meta.env.PROD ? prodUrl : devUrl,
  timeout: 15000,
  // withCredentials: true // 发送请求的时候带上cookie
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
