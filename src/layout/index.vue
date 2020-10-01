<template>
  <div class='layout'>
    <Blog-head></Blog-head>
    <div class="container ley-flex ley-between">
      <div class="ley-view">
        <router-view></router-view>
      </div>
      <!-- <div class="right-side">
        <p class="wen-title">文章归档</p>
        <div>
          <span>></span>
          <span>2019年六月</span>
        </div>
      </div> -->
    </div>
    <Blog-bottom></Blog-bottom>
  </div>
</template>

<script>
  import BlogHead from './components/BlogHeader';
  import BlogBottom from './components/BlogBottom'
  export default {
    data() {
      return {

      }
    },
    computed: {

    },
    watch: {

    },
    mounted() {

    },
    methods: {

    },
    components: {
      BlogHead,
      BlogBottom
    },
  }
</script>

<style scoped lang="scss">
.container {
  width: 70%;
  margin: 0 auto;
  padding-top: 50px;
  color: #000;
  .ley-view {
    width: 100%;
    color: $p-color;
  }
  .right-side {
    width: 20%;
    color: #555;
  }
  .wen-title {
    width: max-content;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 2px;
  }
}
</style>
