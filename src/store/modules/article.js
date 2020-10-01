import * as api from '@api/modules/article'
import { SUCCESS_CODE } from '@api/config'
export default {
  namespaced: true,
  state: {
    articleList: []
  },
  mutations: {
    SET_ARTICLE_LIST(state, list) {
      state.articleList = list
      console.log('设置');
      
    }
  },
  actions: {
    // 获取文章列表
    async getArticleList({ commit, params }) {
      const reqData = await api.queryList(params)
      console.log('返回值：', reqData)
      try {
        if (reqData.code === SUCCESS_CODE) {
          console.log('返回值：', reqData)
          commit('SET_ARTICLE_LIST', reqData.data.list)
          return reqData.data
        }
      } catch (error) {
        console.log('获取文章列表报错：', error)
      }
    },
    
    // 获取文章详情
    async getArticleDetail({ commit }, params) {
      console.log('请求参数：', params)
      const reqData = await api.queryDetail(params)
      try {
        if (reqData.code === SUCCESS_CODE) {
          return reqData.data
        }
      } catch (error) {
        
      }
    }
  }
}
