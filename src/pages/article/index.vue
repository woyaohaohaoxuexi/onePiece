<template>
  <div class='article'>
    <div class="markdown-content">
      <div v-if="articleStr" v-html="articleDom" >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// marked
import marked from 'marked'

// import highlight from 'highlight.js/lib/highlight'
// 必须使用 require() 的方式
const hjs = require('highlight.js')

export default {
  name: 'Article',
  data() {
    return {
      articleStr: ''
    }
  },
  computed: {
    articleDom() {
      const article = this.articleStr
      let articleDom = ''
      if (article) {
        articleDom = marked(article, {
          pedantic: false,
          gfm: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false,
          highlight: (code) => {
            return hjs.highlightAuto(code).value
          }
        })
      }
      return articleDom
    }
  },
  created() {
    let articleId = this.$route.params.id || 1
    this.getArticleDetail({ articleId })
      .then(res => {
        this.articleStr = res.article
      })
      .catch(error => {
        console.log('获取文章详情失败：', error)
      })
  },
  methods: {
    ...mapActions('article', ['getArticleDetail'])
  }
}
</script>

<style scoped lang="scss">

</style>