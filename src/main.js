import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router/index';
// 引入 css
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
