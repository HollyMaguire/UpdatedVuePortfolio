import Vue from 'vue'
import Router from 'vue-router'
import Memory from './views/Memory.vue'
import dice from './views/dice.vue'
// import EvenandOddNumbers from './views/EvenandOddNumbers.vue'
import rockPaperScissors from './views/rockPaperScissors.vue'
import countingCharacters from './views/countingCharacters.vue'
// import EtchASketch from './views/EtchASketch.vue'
//import TicTacToe from './views/TicTacToe.vue'
import findMax from './views/findMax.vue'
// import profile from './views/profile.vue'
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
   //{
   // path: '/TicTacToe',
    // name: 'TicTacToe',
    //component: TicTacToe
   // },
    {
      path: '/rockPaperScissors',
      name: 'rockPaperScissors',
      component: rockPaperScissors
    },
    // {
    //   path: '/etchASketch',
    //   name: 'EtchASketch',
    //   component: EtchASketch
    // },
    // {
    //   path: '/',
    //   name: 'profile',
    //   component: profile
    // },
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
    // {
    //   path: '/EvenandOddNumbers',
    //   name: 'EvenandOddNumbers',
    //   component: EvenandOddNumbers
    // },
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
