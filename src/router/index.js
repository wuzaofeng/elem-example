import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from "../config/env.js";
const Home = () => import('views/home/home')
const City = () => import('views/city/city')
Vue.use(Router)

console.log(routerMode)
export default new Router({
  mode: routerMode,
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
      meta: { keepAlive: true }
    }, {
      path: '/city/:id',
      component: City
    }
  ]
})
