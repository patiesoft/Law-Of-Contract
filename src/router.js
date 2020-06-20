import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About"
import Unit1 from "./views/Unit1"
import Unit2 from "./views/Unit2"
import Unit3 from "./views/Unit3"
import Unit4 from "./views/Unit4"
import Unit5 from "./views/Unit5"
import Unit6 from "./views/Unit6"
import Unit7 from "./views/Unit7"
import Unit8 from "./views/Unit8"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/About',
      name: 'About',
      component: About 
    },
    {
      path: '/Unit1', 
      name: 'Unit1', 
      component: Unit1
    }, 
    {
      path: '/Unit2', 
      name: 'Unit2', 
      component: Unit2
    }, 
    {
      path: '/Unit3', 
      name: 'Unit3', 
      component: Unit3
    }, 
    {
      path: '/Unit4', 
      name: 'Unit4', 
      component: Unit4
    }, 
    {
      path: '/Unit5', 
      name: 'Unit5', 
      component: Unit5
    }, 
    {
      path: '/Unit6', 
      name: 'Unit6', 
      component: Unit6
    }, 
    {
      path: '/Unit7', 
      name: 'Unit7', 
      component: Unit7
    }, 
    {
      path: '/Unit8', 
      name: 'Unit8', 
      component: Unit8
    }, 
  ]
})
