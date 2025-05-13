<template>
    <div class="admin-sidebar bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 overflow-y-auto">
        <div class="p-6 border-b border-gray-700">
            <h2 class="text-xl font-bold">管理后台</h2>
        </div>

        <nav class="py-4">
            <ul>
                <li>
                    <router-link 
                    to="/admin/static" 
                    class="flex items-center px-6 py-3 hover:bg-gray-700 transition"
                    :class="{ 'text-red-500': $route.path === '/admin/static' }"
                    exact-active-class="text-red-500"
                    >
                    <i class="fas fa-tachometer-alt mr-3"></i>
                    <span>仪表盘</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/user" class="flex items-center px-6 py-3 hover:bg-gray-700 transition"
                        :class="isActiveExact('/admin/user')">
                        <i class="fas fa-users mr-3"></i>
                        <span>用户管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/courses" class="flex items-center px-6 py-3 hover:bg-gray-700 transition"
                        :class="isActiveExact('/admin/courses')">
                        <i class="fas fa-book mr-3"></i>
                        <span>课程管理</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        isActiveExact(path) {
            // 检查当前路由是否完全匹配指定路径
            return this.$route.path === path ? "text-red-500" : "text-white";
        },
        isActiveParent(path) {
            // 检查当前路由是否是指定路径的子路由
            return this.$route.matched.some(record => record.path === path) 
            ? "text-red-500" : "text-white";
        }
    }
};
</script>
