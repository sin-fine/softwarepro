export const adminRoutes = [
    {
        path: 'user',
        component: () => import('@/components/admin/adminUser/AdminUser.vue'),
        meta: { layout: 'admin',showNavFooter: false }
    },
    {
        path: 'courses',
        component: () => import('@/components/admin/adminTalk/AdminTalk.vue'),
        meta: { layout: 'admin', showNavFooter: false }
    },
    {
        path: 'static',
        component: () => import('@/components/admin/adminStatic/adminStatic.vue'),
        meta: { layout: 'admin', showNavFooter: false }
    }
];
