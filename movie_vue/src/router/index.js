import Vue from 'vue'
import VueRouter from 'vue-router'

// views 안에 router 연결된 Components
import Home from '@/views/Home.vue'
import LoginView from '@/views/accounts/LoginView'
import SignupView from '@/views/accounts/SignupView'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
