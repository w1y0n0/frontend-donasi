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
    {
        path: '/profile/password',
        name: 'profile.password',
        component: () => import( /* webpackChunkName: "profilePassword" */ '../views/profile/Password.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home/Index.vue')
    },
    {
        path: '/category',
        name: 'category.index',
        component: () => import( /* webpackChunkName: "categoryIndex" */ '../views/category/Index.vue')
    },
    {
        path: '/category/:slug',
        name: 'category.show',
        component: () => import( /* webpackChunkName: "categoryShow" */ '../views/category/Show.vue')
    },
    {
        path: '/campaign',
        name: 'campaign.index',
        component: () => import( /* webpackChunkName: "campaignIndex" */ '../views/campaign/Index.vue')
    },
    {
        path: '/campaign/:slug',
        name: 'campaign.show',
        component: () => import( /* webpackChunkName: "campaignShow" */ '../views/campaign/Show.vue')
    },
    {
        path: '/donation/create/:slug',
        name: 'donation.create',
        component: () => import( /* webpackChunkName: "donationCreate" */ '../views/donation/Create.vue'),
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
