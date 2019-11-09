import axios from 'axios'
const baseURL = 'http://localhost:8090'  // "http://10.54.26.43:8090"
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 5000
// 几种常见的 Content-Type 
// 1、application/json
// 2、application/x-www-form-urlencoded 浏览器原生表单如果不设置 enctype 的值，默认就是这种
// 3、multipart/form-data  上传文件用这种
// 请求前对参数做一些处理
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default axios