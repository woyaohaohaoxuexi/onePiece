<template>
  <div class='home-page'>
    <div 
      v-for="item in articleList"
      class="item-article">
      <h3>
        <router-link :to="{ name: 'Article', params: { id: item.id } }" class="ley-a">
          {{item.title}}
        </router-link>
      </h3>
      <!--  辅助信息  -->
      <div class="date-content">
        <span>{{ item.updateDate || new Date() }}</span>
      </div>
      <!--  简介信息  -->
      <p class="infomation">{{ item.introduction }} </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {
    ...mapState('article', ['articleList']) 
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions('article', ['getArticleList']),
    init() {
      this.getArticleList()
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  .item-article {
    padding-left: 10px;
    padding-bottom: 20px;
    margin-bottom: 60px;
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