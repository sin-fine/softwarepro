<template>
  <div>
      <!-- Navbar -->
      <nav v-if="showNavAndFooter" class="relative bg-white shadow-md z-50">
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
            <router-link to="/info" class="hover:text-primary">
              <img 
                :src="userInfo?.avatar || defaultAvatar" 
                class="w-10 h-10 rounded-full"
              >
            </router-link>
          </div>
          <div v-else>
            <button @click="goLogin"
              class="login-btn px-4 py-2 bg-primary text-white rounded-button hover:bg-red-600 transition">去登录</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view />


    <!-- Footer -->
    <footer v-if="showNavAndFooter" class="site-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <!-- 关于我们 -->
          <div class="footer-section">
            <h4 class="footer-heading">关于我们</h4>
            <ul class="footer-links">
              <li><a href="#">平台介绍</a></li>
              <li><a href="#">团队成员</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>

          <!-- 学习资源 -->
          <div class="footer-section">
            <h4 class="footer-heading">学习资源</h4>
            <ul class="footer-links">
              <li><a href="#">课程中心</a></li>
              <li><a href="#">学习社区</a></li>
              <li><a href="#">帮助中心</a></li>
            </ul>
          </div>

          <!-- 合作伙伴 -->
          <div class="footer-section">
            <h4 class="footer-heading">合作伙伴</h4>
            <ul class="footer-links">
              <li><a href="#">文化机构</a></li>
              <li><a href="#">教育机构</a></li>
              <li><a href="#">非遗传承人</a></li>
            </ul>
          </div>

          <!-- 关注我们 -->
          <div class="footer-section">
            <h4 class="footer-heading">关注我们</h4>
            <div class="social-links">
              <a href="#" aria-label="微信"><i class="fab fa-weixin"></i></a>
              <a href="#" aria-label="微博"><i class="fab fa-weibo"></i></a>
              <a href="#" aria-label="QQ"><i class="fab fa-qq"></i></a>
            </div>
          </div>
        </div>

        <!-- 版权信息 -->
        <div class="footer-copyright">
          <p>© 2025 非遗文化传承. All rights reserved. 京ICP备12345678号-1</p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { getUserInfo } from '@/utils/auth';
export default {
  computed: {
    showNavAndFooter() {
        return this.$route.meta.showNavFooter !== false;
      // return !['/login', '/reg', '/','/register'].includes(this.$route.path);
    }
  },
  mounted() { 
    this.checkLoginStatus(); // 调用方法获取用户信息
  },
  data() {
    return {
      isLogin: false,          // 登录状态
      username: '',         // 登录用户昵称
      userInfo: null,
      defaultAvatar: 'https://ai-public.mastergo.com/ai/img_res/3d5789c1efb356132109ca5c002749a7.jpg', // 默认头像 URL
    }
  },
  watch: {
    $route(to) {
      if (to.path === '/home') {
        this.checkLoginStatus();
      }
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    
    async checkLoginStatus() { // 新增方法用于获取用户信息
      const user = await getUserInfo();
      if (user) {
        this.userInfo = user;
        this.username=this.userInfo.name;

        this.isLogin=true;
      } 
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 导航条容器样式 */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

/* 容器内元素样式 */
nav .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 左侧 logo 和标题 */
nav .flex.items-center {
  display: flex;
  align-items: center;
}

nav .flex.items-center .text-2xl {
  font-size: 1.5rem;
  font-family: 'Pacifico', cursive;
  color: #B91C1C;
}

nav .flex.items-center h1 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
  color: #333;
}

/* 中间导航链接 */
nav .flex.items-center.space-x-8 {
  display: flex;
  gap: 1.5rem;
}

nav .flex.items-center.space-x-8 a {
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  transition: color 0.3s;
}

/* 悬停效果 */
nav .flex.items-center.space-x-8 a:hover {
  color: #B91C1C;
}

/* 搜索框 */
nav .relative {
  position: relative;
}

nav .relative input {
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding: 0.5rem 1rem;
  width: 16rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: border-color 0.3s;
}

nav .relative input:focus {
  border-color: #B91C1C;
}

nav .relative i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: #9ca3af;
}

/* 通知铃铛 */
nav i.far.fa-bell {
  font-size: 1.5rem;
  color: #4b5563;
}

/* 头像 */
nav img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}

/* 底部 footer */
.site-footer {
  background-color: #B91C1C;
  color: #d1d5db;
  padding: 4rem 0;
  font-family: "Microsoft YaHei", "Heiti SC", "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-heading {
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #d1d5db;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffffff;
}

.footer-copyright {
  border-top: 1px solid black;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .site-footer {
    padding: 3rem 0;
  }
}

/* ========== 核心：全局 router-link 激活样式 ========== */
:global(.router-link-active) {
  color: #B91C1C !important;
  font-weight: 600;
}

:global(.router-link-exact-active) {
  color: #B91C1C !important;
  font-weight: 600;
}

.login-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #B91C1C;
  color: #B91C1C;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: transparent !important;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #B91C1C !important;
  color: #fff;
}

</style>
