<template>
  <div class='home-page'>
    <div class="item-article">
      <h3>
        <router-link :to="{name: 'Article', params: {manageId: 11}}" class="ley-a">标题</router-link>
      </h3>
      <!--  辅助信息  -->
      <div class="date-content">
        <span>2019-11-09  21:37</span>
      </div>
      <!--  简介信息  -->
      <p class="infomation">这是简介信息</p>
    </div>
    <div class="item-article">
      <h3>
        <router-link :to="{name: 'Article', params: {manageId: 11}}" class="ley-a">标题</router-link>
      </h3>
      <!--  辅助信息  -->
      <div class="date-content">
        <span>2019-11-09  21:37</span>
      </div>
      <!--  简介信息  -->
      <p class="infomation">这是简介信息</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.home-page {
  .item-article {
    padding-left: 10px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 2px solid $color-border;
    .date-content {
      font-size: 12px;
      color: $color-666;
    }
    .infomation {
      padding-top: 10px;
      font-size: 14px;
    }
  }
}
</style>