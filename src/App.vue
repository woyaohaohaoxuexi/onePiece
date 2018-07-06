<template>
    <div class='demo-vue'>
        <header class="clearfix nav-header">
            <ul class="fl-right clearfix">
                <li v-for="(item, index) in navigationList" :key="item.name" class="fl-left item-nav"
                        :class="{'current-nav': navCheckIndex === index}">
                    <!-- <router-link to=""></router-link> -->
                    {{ item.name }}
                </li>
            </ul>
        </header>
        <div>
            <!-- <vue-markdown></vue-markdown> -->
            <mavon-editor ref="md" :toolbarsFlag="false" :codeStyle="'atom-one-dark'"></mavon-editor>
        </div>
    </div>
</template>

<script>
// 引入markdowm 文件
// import vueMarkdown from 'vue-markdown';
export default {
    data() {
        return {
            navigationList: [
                {
                    name: '工作',
                    id: 1,
                    routerStr: ''
                },{
                    name: '健康',
                    id: 2
                },{
                    name: '休闲',
                    id: 3
                },{
                    name: '生活',
                    id: 4
                }
            ],
            navCheckIndex: 0
        }
    },
    components: {
        // vueMarkdown
    }
}
</script>

<style lang="scss">
@import './styles/normalize.css';
@import './styles/common.scss';

// 头部导航栏
.nav-header {
    height: 70px;
    padding-right: 200px;
    background-color: #f9f9f9;
    .item-nav {
        margin-right: 50px;
        line-height: 70px;
        font-size: 20px;
        color: #374955;
        cursor: pointer;
        &.current-nav {
            color: #0081c6;
        }
    }
}

</style>
