import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './pages/AppPosts.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/posts', name: 'home' },
    { path: '/posts', component: AppPosts, name: 'posts' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})