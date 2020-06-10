import Vue from 'vue'
import VueRouter from 'vue-router'

// views 안에 router 연결된 Components
import Home from '@/views/Home.vue'
import LoginView from '@/views/accounts/LoginView'
import SignupView from '@/views/accounts/SignupView'
import ListView from '@/views/articles/ListView'
import ArticleCreateView from '@/views/articles/ArticleCreateView'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/articles',
    name: 'List',
    component: ListView
  },
  {
    path: '/articles/create',
    name: 'ArticleCreate',
    component: ArticleCreateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
