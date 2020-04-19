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
const renderer = new marked.Renderer()

renderer.code = (str, infostring, escaped) => {
  console.log('code str ===> ', str);
  console.log('code infostring ===> ', infostring)
  console.log('code escaped ===> ', escaped)
  // const validLanguage = hjs.getLanguage(infostring) ? infostring : 'plaintext';
  // const codeHtml = hjs.highlight(validLanguage, str).value;
  const codeHtml = hjs.highlightAuto(str).value;
  return `
    <div>
      <div class="code-header">
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
          highlight: (code, language) => {
            // console.log('code ===>>>', code);
            console.log('language ===>>', language);
            
            // console.log('输出DOM：', hjs.highlightAuto(code).value);
            const validLanguage = hjs.getLanguage(language) ? language : 'plaintext';
            console.log('validLanguage ===>>>', hjs.highlightAuto(code).value);
            return hjs.highlightAuto(code).value
            // return hjs.highlight(validLanguage, code).value;
            // const codeMain = hjs.highlightAuto(code).value
            // const htmlStr = `<span><i></i><i></i><i></i></span>
            //   ${codeMain}
            // `
            // return htmlStr
          },
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
        console.log('获取文章详情失败：', error)
      })
  },
  methods: {
    ...mapActions('article', ['getArticleDetail'])
  }
}
</script>

<style scoped lang="scss">
.article {
  /deep/ .code-header {
    .item-range {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>