const { defineConfig } = require('@vue/cli-service');

// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.18.39.108:8000', // 后端根地址，无 /api 前缀
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // 移除前端请求中的 /api 前缀，转发至后端真实路径
      }
    }
  }
};