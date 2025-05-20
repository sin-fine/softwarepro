import axios from 'axios'
import router from '@/router'
// const service = axios.create({
//   baseURL: process.env.NODE_ENV === 'production' 
//     ? 'http://1.15.229.186' // 生产环境直接使用后端地址
//     : '/', // 开发环境通过代理转发
//   timeout: 10000
// });
const service = axios.create({
  baseURL: 'http://1.15.229.186',
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    const admintoken = localStorage.getItem('admin_token');

    console.log('请求携带的 Token:', token); 
    if (token) {
      // 注意：必须以 "Bearer " 开头（有空格）
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (admintoken) {
      // 注意：必须以 "Bearer " 开头（有空格）
      config.headers['Authorization'] = `Bearer ${admintoken}`;
    }
    return config;
  },
  error => {
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// utils/request.js（响应拦截器）
service.interceptors.response.use(
  response => response,
  async error => {
    const { response, config } = error;
    
    // 处理 401 未认证错误
    if (response?.status === 401) {
      let targetLoginPath = '/admin/login'; // 默认跳转管理端（可根据业务调整）
      
      // 1. 从当前路由元信息获取端类型（适用于页面路由跳转）
      const currentRouteType = router.currentRoute.value.meta.type;
      
      // 2. 从请求配置中获取端类型（适用于直接 API 请求）
      const requestRouteType = config?.meta?.type;
      
      // 优先使用请求配置中的端类型，其次使用当前路由的端类型
      const routeType = requestRouteType || currentRouteType;
      
      if (routeType === 'user') {
        targetLoginPath = '/login'; // 用户端登录页路径
      } else if (routeType === 'admin') {
        targetLoginPath = '/admin/login'; // 管理端登录页路径
      }

      // 清除 Token 并跳转
      localStorage.removeItem('access_token');
      await router.push(targetLoginPath);
    }

    return Promise.reject(error);
  }
);
// // 请求拦截器（处理Token）
// service.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// // 响应拦截器（统一错误处理）
// service.interceptors.response.use(
//   (response) => {
//     if (response.data.code && response.data.code !== 200) {
//       alert(response.data.message || '操作失败'); // 统一提示错误
//       return Promise.reject(response.data);
//     }
//     return response.data;
//   },
//   (error) => {
//     if (error.response?.status === 422) {
//       alert('参数验证失败，请检查输入');
//     }
//     return Promise.reject(error);
//   }
// );
// // service.interceptors.response.use(
// //   response => {
// //     if (response.data.code && response.data.code !== 200) {
// //       return Promise.reject(response.data)
// //     }
// //     return response.data
// //   },
// //   error => {
// //     if (error.response?.status === 401) {
// //       localStorage.removeItem('token')
// //       window.location.reload()
// //     }
// //     return Promise.reject(error)
// //   }
// // )

export default service