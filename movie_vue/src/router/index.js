import Vue from 'vue'
import VueRouter from 'vue-router'

// views 안에 router 연결된 Components
import Home from '@/views/Home.vue'
import LoginView from '@/views/accounts/LoginView'
import SignupView from '@/views/accounts/SignupView'
import ListView from '@/views/articles/ListView'
import ArticleCreateView from '@/views/articles/ArticleCreateView'
import LogoutView from '@/views/accounts/LogoutView'


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
  {
    path: '/accounts/logout',
    name: 'Logout',
    component: LogoutView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['Login', 'Signup', 'Home', 'List']  // Login 안해도 됨
  const authPages = ['Login', 'Signup']  // Login 되어있으면 안됨

  const authRequired = !publicPages.includes(to.name)  // 로그인 해야 함.
  const unauthRequired = authPages.includes(to.name)  // 로그인 해서는 안됨
  const isLoggedIn = !!Vue.$cookies.isKey('auth-token')

  if(unauthRequired && isLoggedIn) {
    next('/')
  }
  authRequired && !isLoggedIn ? next({ name: 'Login'}) : next()
})



export default router
