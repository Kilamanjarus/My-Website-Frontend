import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalCreate from '../views/JournalCreate.vue'
import JournalsView from '../views/JournalsView.vue'
import MyArtView from '../views/MyArtView.vue'
import RandomInterestView from '../views/RandomInterestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/journalnew',
    name: 'journalCreate',
    component: JournalCreate
  },
  {
    path: '/journals',
    name: 'journals',
    component: JournalsView
  },
  {
    path: '/art',
    name: 'myArt',
    component: MyArtView
  },
  {
    path: '/interests',
    name: 'RandomInterest2',
    component: RandomInterestView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
