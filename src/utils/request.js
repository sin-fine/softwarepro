import axios from 'axios'

const service = axios.create({
  baseURL: 'http://10.18.39.108:8000',
  timeout: 10000
})

// 请求拦截器（处理Token）
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器（统一错误处理）
service.interceptors.response.use(
  response => {
    if (response.data.code && response.data.code !== 200) {
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default service