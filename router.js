import Vue from 'vue'
import Router from 'vue-router'
import Memory from './views/Memory.vue'
import dice from './views/dice.vue'
import rockPaperScissors from './views/rockPaperScissors.vue'
import countingCharacters from './views/countingCharacters.vue'
import findMax from './views/findMax.vue'
import viewsMousetracking from './views/Mousetracking.vue'
import luckySevens from './views/luckySevens.vue'
import restaurant from './views/restaurant.vue'
import Menu from './views/Menu.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/Contact',
    name:'Contact',
    component: Contact
    },
   {
    path:'/Menu',
    name: 'Menu',
    component: Menu
    },
    {
    path: '/restaurant',
    name: 'restaurant',
    component: restaurant
  },
    {
      path: '/luckySevens',
      name: 'luckySevens',
      component: luckySevens
    },
    {
      path: '/viewsMousetracking',
      name: 'viewsMousetracking',
      component: viewsMousetracking
    },
 
    {
      path: '/rockPaperScissors',
      name: 'rockPaperScissors',
      component: rockPaperScissors
    },
   
    {
      path: '/Memory',
      name: 'Memory',
      component: Memory 
    },
    {
      path: '/',
      name: 'Memory',
      component: Memory 
    },
    {
      path: '/dice',
      name: 'dice',
      component: dice
    },
  
    {
      path: '/countingCharacters',
      name: 'countingCharacters',
      component: countingCharacters
    },
    {
      path: '/findMax',
      name: 'findMax',
      component: findMax
    }


  ]
})
