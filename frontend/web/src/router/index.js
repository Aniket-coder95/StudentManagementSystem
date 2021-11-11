import { createRouter, createWebHistory } from 'vue-router'
import navbar from '../components/navbar'
import home from '../components/home'
import signup from '../components/signup'
import login from '../components/login'
import about from '../components/about'
import check from '../components/student/main'
// import dash from '../components/admin/layout/Dashboardlayout'


const routes = [
  {
    path: '/',
    name: 'nav',
    component: navbar
  },
  {
    path: '/signup',
    name: 'registration',
    component: signup
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: login
  },
  {
    path:'/home',
    name: 'homepage',
    component: home
  },
  {
    path:'/about-us',
    name:'about',
    component:about
  },
  {
    path: '/check',
    name: 'check',
    component: check
  }
  // {
  //   path: '/d',
  //   name: 'dash',
  //   component: dash
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
