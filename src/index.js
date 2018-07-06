import Vue from 'vue';
// import vueRouter from 'vue-router';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import App from './App.vue';
// Vue.use(vueRouter);
Vue.use(mavonEditor);


new Vue({
    el: '#app',
    render: h=> h(App)
})