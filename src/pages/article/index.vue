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

// 必须使用 require() 的方式
const hjs = require('highlight.js')
const renderer = new marked.Renderer()

renderer.code = (str, infostring, escaped) => {
  const codeHtml = hjs.highlightAuto(str).value;
  return `
    <div class="code-main">
      <div class="code-header ley-flex">
        <div class="item-range"></div>
        <div class="item-range"></div>
        <div class="item-range"></div>
      </div>
      <div class="code-content">
        <pre><code>${codeHtml}</code></pre>
      </div>
    </div>
  `
}
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
          pedantic: false,  // 如果为true，则尽可能符合原始的markdown.pl。不要修复原始的降价错误或行为。关闭并覆盖gfm。
          gfm: true, // 使用标准的 GitHub Flavored 语法
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false,
          // highlight: (code, language) => {
          // },
          renderer
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
        throw new Error(`获取文章详情失败：${error}`)
      })
  },
  methods: {
    ...mapActions('article', ['getArticleDetail'])
  }
}
</script>

<style scoped lang="scss">
.article {
  /deep/ .code-main {
    background-color: #f8f8f8;
    border-radius: 10px;
    .code-header {
      padding: 10px 0 0 20px;
      .item-range {
        width: 12px;
        height: 12px;
        margin-right: 8px;
        border-radius: 50%;
        background-color: red;
        &:nth-child(1) {
          background-color: #ff5f56;
        }
        &:nth-child(2) {
          background-color: #ffbd2e;
        }
        &:nth-child(3) {
          background-color: #27c93f;
        }
      }
    }
    .code-content {
      pre {
        margin-top: 0;
      }
    }
  }
}
</style>