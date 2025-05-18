const { defineConfig } = require('@vue/cli-service');

// vue.config.js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.18.39.108:8000', // 后端真实地址+端口
        changeOrigin: true, // 跨域请求时修改 Origin 头
        pathRewrite: { '^/api': '' }, // 移除请求路径中的 /api 前缀，匹配后端接口路径
        secure: false, // 允许 HTTP 协议（若后端为 HTTPS 需设为 true）
        logLevel: 'debug' // 打印代理日志，查看请求转发情况
      }
    }
  }
};// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://1.15.229.186', 
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }, // 移除前端请求中的 /api 前缀，转发至后端真实路径
//       }
//     }
//   }
// };