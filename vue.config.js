const path = require('path');
function resolve (src) {
  return path.resolve(__dirname, src);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/'))
      .set('@layout', resolve('src/layout'))
      .set('@pages', resolve('src/pages'))
      .set('@components', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))

    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  // 解析 css, 在每个添加了  <style lang="scss"> 的组件中引入 公共样式文件 
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/main.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8090',
        ws: false,
        changeOrigin: true
      }
    }
  }
}