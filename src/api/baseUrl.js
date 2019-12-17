// export const BASE_URL = 'http://www.onepiecening.com/ley'
// export const BASE_URL = '/ley'
const ENV_NAME = process.env.NODE_ENV
export const BASE_URL = ENV_NAME === 'development' ? '/ley' : 'http://oem.onepiecening.com/ley' // 开发环境