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
    //isLoggedIn: state => !!state.authToken,
    config: state => ({
      headers: {
        Authorization: `Token ${state.authToken}`
      }
    })
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
    postAuthData({ commit }, info) {
      axios.post(SERVER.URL + info.location, info.data)
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          router.push({ name: 'Home' })
        })
        .catch(err => console.log(err.response.data))
    },
    // accounts
    signup({ dispatch }, signupData) {
      const info = {
        location: SERVER.ROUTES.signup,
        data: signupData
      }
      dispatch('postAuthData', info)
    },
    login({ dispatch }, loginData) {
      const info = {
        location: SERVER.ROUTES.login,
        data: loginData
      }
      dispatch('postAuthData', info)
    },
    logout({ getters, commit }) {
      axios.post(SERVER.URL + SERVER.ROUTES.logout, null, getters.config)
        .then(() => {
          commit('SET_TOKEN', null) // state.authToken = null & 브라우저 쿠키 값을 null 지정한다.
          cookies.remove('auth-token') // 브라우저 쿠키를 삭제한다.
          router.push({ name: 'Home' })
        })
        .catch(err => console.log(err.response.data))
    },

    // articles
    fetchArticles({ commit }) {
      axios.get(SERVER.URL + SERVER.ROUTES.articleList)
        .then(res => {
          commit('SET_ARTICLES', res.data)
        })
    },
    createArticle({ getters }, articleData) {
      axios.post(SERVER.URL + SERVER.ROUTES.createArticle, articleData, getters.config)
        .then((res) => {
          console.log(res) // => 디테일로 넘어가기 원하면 사용해야함
          router.push({ name: 'List' })
        })
        .catch(err => console.log(err.response.data))
    },

  },
  modules: {
  }
})
