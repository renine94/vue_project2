import Vue from 'vue'
import Vuex from 'vuex'

// 라이브러리 가져오기
import cookies from 'vue-cookies'
import axios from 'axios'

// router 등 가져오기
import router from '@/router'
import SERVER from '@/api/drf'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: cookies.get('auth-token'),
    articles: [],
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.authToken = token // data 저장
      cookies.set('auth-token', token) // browser 쿠키저장
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles
    },
  },
  actions: {
    login({ commit }, loginData) {
      axios.post(SERVER.URL + SERVER.ROUTES.login, loginData)
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          router.push({ name: 'Home' })
        })
        .catch(err => console.log(err.response.data))
    },
    signup({ commit }, signupData) {
      axios.post(SERVER.URL + SERVER.ROUTES.signup, signupData)
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          router.push({ name: 'Home'})
        })
        .catch(err => console.log(err.response.data))
    },
    fetchArticles({ commit }) {
      axios.get(SERVER.URL + SERVER.ROUTES.articleList)
        .then(res => {
          commit('SET_ARTICLES', res.data)

        })
    },
  },
  modules: {
  }
})
