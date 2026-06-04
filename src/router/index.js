//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//import store vuex
import store from '../store'

//define a routes
const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
    {
        path: '/donation',
        name: 'donation.index',
        component: () => import( /* webpackChunkName: "donationIndex" */ '../views/donation/Index.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import( /* webpackChunkName: "profile" */ '../views/profile/Index.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router
