import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/databinding/string',
      name: 'DataBindingStringView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingStringView.vue')
    },
    {
      path: '/databinding/html',
      name: 'DataBindingHtmlView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingHtmlView.vue')
    },
    {
      path: '/databinding/input',
      name: 'DataBindingInputView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingInputView.vue')
    },
    {
      path: '/databinding/select',
      name: 'DataBindingSelectView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingSelectView.vue')
    },
    {
      path: '/databinding/checkbox',
      name: 'DataBindingCheckboxView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingCheckboxView.vue')
    },
    {
      path: '/databinding/radio',
      name: 'DataBindingRadioView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingRadioView.vue')
    },
    {
      path: '/databinding/attr',
      name: 'DataBindingAttributeView',
      component: () => import(/* webpackChunkName: "databindng", webpackPrefetch:true */'../views/1_databinding/DataBindingAttributeView.vue')
    }
    
    
  ]
})

export default router
