import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    article
  }
})

export default store