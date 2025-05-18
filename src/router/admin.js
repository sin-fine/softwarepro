export const adminRoutes = [
    {
        path: 'login',
        component: () => import('@/components/admin/login/adminLogin.vue'),
        meta: { layout: 'admin',showNavFooter: false,ifshow:false }
    },
    {
        path: 'adminUser',
        component: () => import('@/components/admin/adminUser/AdminUser.vue'),
        meta: { layout: 'admin',showNavFooter: false, ifshow: true  }
    },
    {
        path: 'permission',
        component: () => import('@/components/admin/adminPermission/AdminPermission.vue'),
        meta: { layout: 'admin', showNavFooter: false, ifshow: true  }
    },
    {
        path: 'static',
        component: () => import('@/components/admin/adminStatic/adminStatic.vue'),
        meta: { layout: 'admin', showNavFooter: false, ifshow: true  }
    }
];
