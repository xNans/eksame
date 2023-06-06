import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

    {
      path: '/dryone',
      name: 'dryone',
      component: () => import('../views/Dry/DryOne.vue')
    },
    {
      path: '/drytwo',
      name: 'drytwo',
      component: () => import('../views/Dry/DryTwo.vue')
    },
    {
      path: '/drythree',
      name: 'drythree',
      component: () => import('../views/Dry/DryThree.vue')
    },
    {
      path: '/dryfour',
      name: 'dryfour',
      component: () => import('../views/Dry/DryFour.vue')
    },

  {
    path: '/weighing',
    name: 'weighing',
    component: () => import('../views/WeighingView.vue')
  },
  {
    path: '/meat',
    name: 'meat',
    component: () => import('../views/MeatView.vue')
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('../views/KitchenView.vue')
  },
  {
    path: '/filling',
    name: 'filling',
    component: () => import('../views/FillingView.vue')
  },
  {
    path: '/packaging',
    name: 'packaging',
    component: () => import('../views/PackagingView.vue')
  },

    {
      path: '/packone',
      name: 'packone',
      component: () => import('../views/Packing/PackOne.vue')
    },

    {
      path: '/packtwo',
      name: 'packtwo',
      component: () => import('../views/Packing/PackTwo.vue')
    },

    {
      path: '/packthree',
      name: 'packthree',
      component: () => import('../views/Packing/PackThree.vue')
    },

    {
      path: '/packfour',
      name: 'packfour',
      component: () => import('../views/Packing/PackFour.vue')
    },

    {
      path: '/packfive',
      name: 'packfive',
      component: () => import('../views/Packing/PackFive.vue')
    },

    {
      path: '/packsix',
      name: 'packsix',
      component: () => import('../views/Packing/PackSix.vue')
    },


  
  {
    path: '/storage',
    name: 'storage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StorageView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
