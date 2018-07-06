import VUE_ROUTER from 'vue-router'; 

// 引入页面文件
import INDEX_VUE from '../App.vue';
import WORK_VUE from '../page-models/work/index.vue';
import JAVASCRIPT_VUE from '../page-models/work/page-vues/javascript/javascript.vue';

const routes = [
    {
        path: '/',
        redirect: '/work/javascript'
    },{
        path: '/work/javascript',
        component: WORK_VUE
    }
]
