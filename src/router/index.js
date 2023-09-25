import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoadingView from '../views/LoadingView.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WelcomeView
    },
    {
      path: '/loading',
      component: LoadingView
    },
    {
      path: '/pokemons',
      component: ListView
    }
  ]
})

export default router
