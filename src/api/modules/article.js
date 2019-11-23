import request from '../request'
import { BASE_URL } from '../baseUrl'

export const queryList = (params) => {
  return request({
    url: `${BASE_URL}/get/article-list`,
    method: 'get',
    params
  })
}

export const queryDetail = (params) => {
  return request({
    url: `${BASE_URL}/get/article-detail`,
    method: 'get',
    params
  })
}