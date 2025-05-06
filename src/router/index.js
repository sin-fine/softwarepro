import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Init from '@/components/InitPage.vue'
import Login from '@/components/LoginPage.vue'
import Reg from '@/components/RegPage.vue'
import Home from '@/components/HomePage.vue'
import Courses from '@/components/CoursesPage.vue'
import Tasks from '@/components/TasksPage.vue'
import Museum from '@/components/MuseumPage.vue'
import Evaluation from '@/components/EvaluationPage.vue'

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
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active'
})


export default router