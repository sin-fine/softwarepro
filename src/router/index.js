import {
    createRouter,
    createWebHistory
} from 'vue-router'
import { userRoutes } from './user';
import { adminRoutes } from './admin';

import Init from '@/components/init/InitPage.vue'
import UserLayout from '@/components/layout/UserLayout.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue';

const routes=[
  {path:'/',component:Init,meta: {showNavFooter: false }},
  {
      path: '/',
      component: UserLayout,
      children: userRoutes
    },
    {
      path: '/admin',
      redirect:'/admin/static',
      component: AdminLayout,
      children: adminRoutes,
      meta: {showNavFooter: false }
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return {top:0}
  },
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
})


export default router