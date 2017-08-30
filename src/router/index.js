import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/',
        component: Layout,
        children: [{
            path: '',
            name: 'Home',
            component: Home
        }]
    }]
})