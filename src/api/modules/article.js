import request from '../request'

export const queryList = (params) => {
  return request({
    url: `/get/article-list`,
    method: 'get',
    params
  })
}

export const queryDetail = (params) => {
  return request({
    url: `/get/article-detail`,
    method: 'get',
    params
  })
}