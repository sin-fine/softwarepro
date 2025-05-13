<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <span class="text-2xl font-['Pacifico'] text-primary">logo</span>
        <h1 class="text-xl font-medium">非遗文化传承</h1>
      </div>
      <div class="flex items-center space-x-8">
        <router-link to="/home" class="hover:text-primary">首页</router-link>
        <router-link to="/courses" class="hover:text-primary">课程中心</router-link>
        <router-link to="/tasks" class="hover:text-primary">任务广场</router-link>
        <router-link to="/museum" class="hover:text-primary">文化展馆</router-link>
        <router-link to="/evaluation" class="hover:text-primary">在线测评</router-link>
      </div>
      <div class="flex items-center space-x-6">
        <div class="relative">
          <input type="text" placeholder="搜索课程、文化内容"
            class="pl-12 pr-4 py-2 w-64 border border-gray-200 rounded-button text-sm" style="padding-left: 2.3rem;">
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
        <i class="far fa-bell text-gray-600 text-xl"></i>
        <div v-if="isLogin" class="flex items-center space-x-2">
          <span class="text-gray-700 text-base">{{ username }}</span>
          <img src="https://ai-public.mastergo.com/ai/img_res/3d5789c1efb356132109ca5c002749a7.jpg"
            class="w-10 h-10 rounded-full">
        </div>
        <div v-else>
          <button @click="goLogin"
            class="login-btn px-4 py-2 bg-primary text-white rounded-button hover:bg-red-600 transition">去登录</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      default: '张三'
    },
    showNavAndFooter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goLogin() {
      this.$emit('goLogin');
    }
  }
};
</script>

<style scoped>
/* 头部组件的样式，可根据需要调整 */
</style>