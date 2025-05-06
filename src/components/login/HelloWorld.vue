<template>
  <div class="flex justify-center items-center bg-[#F9F6F2] min-h-screen">
    <div class="w-[460px] bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/20">
      <div class="text-center mb-8">
        <h1 class="font-['Pacifico'] text-3xl text-primary mb-4">logo</h1>
        <p class="text-secondary text-sm">山水之道，传承千年文脉</p>
      </div>
      <div class="mb-6">
        <div class="flex gap-4 mb-6">
          <button
            class="flex-1 py-2 text-center border-b-2 border-primary text-primary"
            @click="loginType = 'phone'"
          >
            手机号登录
          </button>
          <button
            class="flex-1 py-2 text-center border-b-2 border-gray-200 text-gray-400"
            @click="loginType = 'email'"
          >
            邮箱登录
          </button>
        </div>
        <div v-if="loginType === 'phone'" class="space-y-4">
          <div class="relative">
            <input
              type="text"
              placeholder="请输入手机号"
              class="w-full px-4 py-3 border border-gray-200 rounded-button text-sm"
              v-model="phone"
            />
            <i class="fas fa-mobile-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <div class="space-y-4">
            <div class="relative">
              <input
                type="text"
                placeholder="请输入验证码"
                class="w-full px-4 py-3 border border-gray-200 rounded-button text-sm"
                v-model="verificationCode"
              />
              <button
                class="absolute right-2 top-1/2 -translate-y-1/2 text-primary text-sm whitespace-nowrap"
                @click="getVerificationCode"
              >
                获取验证码
              </button>
            </div>
            <div class="relative">
              <input
                type="password"
                placeholder="请输入密码"
                class="w-full px-4 py-3 border border-gray-200 rounded-button text-sm"
                v-model="password"
              />
              <i class="fas fa-eye absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></i>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 accent-primary" v-model="rememberPassword" />
              <span class="text-sm text-gray-600">记住密码</span>
            </label>
            <a href="#" class="text-sm text-primary hover:text-primary/80">忘记密码？</a>
          </div>
          <button
            class="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-button"
            @click="login"
          >
            登 录
          </button>
        </div>
      </div>
      <div class="relative text-center mb-6">
        <div class="absolute left-0 top-1/2 w-full h-px bg-gray-200"></div>
        <span class="relative px-4 bg-white text-sm text-gray-400">其他登录方式</span>
      </div>
      <div class="flex justify-center gap-8 mb-8">
        <button
          class="w-10 h-10 rounded-full bg-[#07C160] flex items-center justify-center text-white"
          @click="loginWithWeChat"
        >
          <i class="fab fa-weixin text-lg"></i>
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#12B7F5] flex items-center justify-center text-white"
          @click="loginWithQQ"
        >
          <i class="fab fa-qq text-lg"></i>
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#E6162D] flex items-center justify-center text-white"
          @click="loginWithWeibo"
        >
          <i class="fab fa-weibo text-lg"></i>
        </button>
      </div>
      <div class="text-center">
        <span class="text-sm text-gray-600">还没有账号？</span>
        <a href="#" class="text-sm text-primary hover:text-primary/80 ml-2">立即注册</a>
        <span class="text-sm text-gray-400 mx-2">|</span>
        <a href="#" class="text-sm text-primary hover:text-primary/80">找回密码</a>
      </div>
    </div>
    <div class="fixed bottom-4 w-full text-center text-sm text-gray-400">
      Copyright © 2024 传统文化学习平台 All Rights Reserved.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 登录类型，phone: 手机号登录, email: 邮箱登录
const loginType = ref('phone');
// 手机号
const phone = ref('');
// 验证码
const verificationCode = ref('');
// 密码
const password = ref('');
// 是否记住密码
const rememberPassword = ref(false);

// 模拟获取验证码方法
const getVerificationCode = () => {
  // 这里可以添加实际的获取验证码逻辑，例如调用API
  console.log('获取验证码', phone.value);
};

// 模拟登录方法
const login = () => {
  // 这里可以添加实际的登录逻辑，例如调用API
  console.log('登录', phone.value, verificationCode.value, password.value, rememberPassword.value);
};

// 模拟微信登录方法
const loginWithWeChat = () => {
  // 这里可以添加实际的微信登录逻辑，例如调用微信登录API
  console.log('微信登录');
};

// 模拟QQ登录方法
const loginWithQQ = () => {
  // 这里可以添加实际的QQ登录逻辑，例如调用QQ登录API
  console.log('QQ登录');
};

// 模拟微博登录方法
const loginWithWeibo = () => {
  // 这里可以添加实际的微博登录逻辑，例如调用微博登录API
  console.log('微博登录');
};
</script>

<script>
export default {
  name: 'LoginPage',
  components: {},
};
</script>

<style scoped>
body {
  background-image: url('https://ai-public.mastergo.com/ai/img_res/d28effe54c781d51dab426e9ca8fc7aa.jpg');
  background-size: cover;
  background-position: center;
  min-height: 1024px;
}

input:focus {
  outline: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>