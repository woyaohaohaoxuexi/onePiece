<template>
  <div class='layout'>
    <Blog-head></Blog-head>
    <div class="container ley-flex ley-between">
      <div class="ley-view">
        <router-view></router-view>
      </div>
      <div class="right-side">
        <p class="wen-title">文章归档</p>
        <div>
          <span>></span>
          <span>2019年六月</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogHead from '@components/Head';
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
      BlogHead
    },
  }
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  color: #000;
  .ley-view {
    width: 70%;
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
