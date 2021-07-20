import Vue from 'vue'
import VueRouter from 'vue-router'
import Lessons from '../views/Lessons'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Lessons,
    redirect:"/lesson_zero",
    children:[
      {
        path: '/lesson_zero',
        name: 'Lesson_zero',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Lesson_zero')
      },
      {
        path: '/lesson_one',
        name: 'Lesson_one',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Lesson_one')
      },
      {
        path: '/lesson_three',
        name: 'Lesson_three',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Lesson_three')
      },

    ]
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/Lesson_zero.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
