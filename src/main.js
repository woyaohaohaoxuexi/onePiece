import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入 css
import 'normalize.css'
import './assets/styles/base/reset.scss'
import './assets/styles/base/common.scss'
import './assets/styles/base/layout.scss'
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
