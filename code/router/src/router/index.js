// 导入需要的依赖包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/tab/Home'
import Movie from '@/components/tab/Movie'
import About from '@/components/tab/About'
import Tab1 from '@/components/tab/Tab1'
import Tab2 from '@/components/tab/Tab2'
import Main from '@/components/Main'
import Login from '@/components/Login'

// 使用Vue.use()函数，安装VueRouter为项目插件
Vue.use(VueRouter);

// 创建router实例对象
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/movie',
        component: Movie,
        children: [
            // 开启props传参，方便组件拿到动态参数的值
            {path: '/movie/tab1/:mid', component: Tab1, props: true}
        ]},
        {path: '/about',
        component: About,
        children: [
            {path: '/about', redirect: '/about/tab1'},
            {path: '/about/tab1', component: Tab1},
            {path: '/about/tab2', component: Tab2}
        ]},
        {path: '/main', component: Main},
        {path: '/login', component: Login},
    ]
});

// 判断是否去后台
// 1. 去后台，判断是否有token
// 1.1 有token，放行
// 1.2 没有token，强制跳转到登录页
// 2. 不去后台，放行
router.beforeEach((to, from, next) => {
    if(to.path === '/main') {
        const token = localStorage.getItem('token');
        if(token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next ();
    }
})

// 向外共享路由的实例对象
export default router;
 