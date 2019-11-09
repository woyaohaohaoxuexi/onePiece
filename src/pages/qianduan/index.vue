<template>
  <div class=''>
    <!--  标题  -->
    <p class="ley-title">前端修炼</p>
    <!--  时间信息  -->
    <p class="date-info">2019/05/28</p>
    <p class="ley-hint">前端发展越来越快，新技术不断迭代更新，如何才能一直走在技术的前沿</p>
    <div class="markdown-body">
      <markdown></markdown>
    </div>
  </div>
</template>

<script>
  import markdown from '@components/aa.md'
  // 代码高亮
  import 'highlight.js/styles/github.css'
  // 其他元素使用 github 的样式
  import 'github-markdown-css'

  import axios from 'axios'
  export default {
    components: {
      markdown
    },
    data() {
      return {

      }
    },
    created() {
      axios.get('http://127.0.0.1:8090/add')
        .then(res => {
          console.log('返回值：', res)
        })
        .catch(error => {
          console.log('错误信息：', error)
        })
    }
  }
</script>

<style scoped lang="scss">

  .ley-title {
    width: max-content;
    margin-bottom: 7px;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      color: #2775b6;
    }
  }
  .date-info {
    margin-bottom: 20px;
    color: #767676;
  }
  .ley-hint {
    font-weight: 300;
    color: #555;
  }

</style>
