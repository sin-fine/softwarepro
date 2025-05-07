import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Init from '@/components/init/InitPage.vue'
import Login from '@/components/login/LoginPage.vue'
import Reg from '@/components/vice/RegPage.vue'
import Home from '@/components/main/HomePage.vue'
import Courses from '@/components/course/CoursesPage.vue'
import Tasks from '@/components/task/TasksPage.vue'
import Museum from '@/components/museum/MuseumPage.vue'
import Evaluation from '@/components/evaluation/EvaluationPage.vue'

const routes=[
  {path:'/',component:Init},
  {path:'/home',component:Home},
  {path:'/courses',component:Courses},
  {path:'/tasks',component:Tasks},
  {path:'/museum',component:Museum},
  {path:'/evaluation',component:Evaluation},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return {top:0}
  },
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active'
})


export default router