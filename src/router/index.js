/**@是在 webpack.base.conf.js 文件里配置的，代表src*/
/**引入index页面的allgoods子页面 */
import allgoods from "@/views/allgoods";
import detail from '@/views/detail';
/**引入index页面的home子页面 */
import Home from "@/views/home";
/**引入index页面 */
import index from '@/views/index';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            children: [//子路由
                {
                    path: "/",
                    name: "Home",
                    component: Home
                },
                {
                    path: "/allgoods",
                    name: "allgoods",
                    component: allgoods
                },
            ]
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }]
})