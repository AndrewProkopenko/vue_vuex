import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Posts from '../views/Posts.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    name: 'edit', 
    path: '/edit/:id',
    component: Edit
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
