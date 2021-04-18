import Login from '@/components/login'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    }]
})