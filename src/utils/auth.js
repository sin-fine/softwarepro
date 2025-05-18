// import request from '@/utils/request'; // 假设已存在网络请求工具
// // 获取用户信息
// export const getUserInfo = async () => {
//     try {
//         const accessToken = localStorage.getItem('access_token');
//         if (!accessToken) {
//             return null; // 未登录时返回 null
//         }

//         const response = await request.get('/api/user/me', {
//             headers: {
//                 Authorization: accessToken ? `Bearer ${accessToken}` : '' // 携带令牌
//             }
//         });
//         console.log("getmessage",response.data);
//         return response.data; // 返回用户信息（如姓名、头像等）
//     } catch (error) {
//         if (error.response?.status === 401) {
//             // 认证失败时清除令牌
//             localStorage.removeItem('access_token');
//         }
//         console.error('获取用户信息失败:', error);
//         return null;
//     }
// };

// // 清除用户登录状态
// export const clearUserLogin = () => {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('user_info');
// };
// auth.js
import request from '@/utils/request';

export const getUserInfo = async () => {
    try {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        console.log('未找到 Token,用户未登录');
        return null;
    }
    
    // 请求头已在拦截器中统一设置，无需在此重复添加
    const response = await request.get('/api/user/me');
    console.log('获取用户信息成功:', response.data);
    return response.data;
    } catch (error) {
    console.error('获取用户信息失败:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token'); // 清除无效 Token
    }
    return null;
    }
};