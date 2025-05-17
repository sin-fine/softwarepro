export const userRoutes = [
    {
        path: '/home',
        component: () => import('@/components/user/main/HomePage.vue'),
        meta: { layout: 'user', showNavFooter: true  }
    },
    {
        path: '/courses',
        component: () => import('@/components/user/course/CoursesPage.vue'),
        meta: { layout: 'user' , showNavFooter: true }
    },
    {
        path: '/tasks',
        component: () => import('@/components/user/task/TasksPage.vue'),
        meta: { layout: 'user' , showNavFooter: true }
    },
    {
        path: '/museum',
        component: () => import('@/components/user/museum/MuseumPage.vue'),
        meta: { layout: 'user', showNavFooter: true  }
    },
    {
        path: '/elvaluation',
        component: () => import('@/components/user/evaluation/EvaluationPage.vue'),
        meta: { layout: 'user' , showNavFooter: true }
    },
    {
        path: '/reg',
        component: () => import('@/components/user/course/CoursesPage.vue'),
        meta: { layout: 'user', showNavFooter: true  }
    },
    {
        path: '/courses',
        component: () => import('@/components/user/vice/RegPage.vue'),
        meta: { layout: 'user', showNavFooter: true  }
    },
    {
        path: '/login',
        component: () => import('@/components/user/login/LoginPage.vue'),
        meta: { layout: 'user', showNavFooter: false  }
    },
    {
        path: '/register',
        component: () => import('@/components/user/login/RegisterPage.vue'),
        meta: { layout: 'user', showNavFooter: false  }
    }
];