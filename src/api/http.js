/*
 * @Author: 王云飞
 * @Date: 2022-06-21 09:53:52
 * @LastEditTime: 2023-01-11 15:50:26
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import axios from 'axios'

import { getFullURL } from '@/utils'

import { useUserStore } from '@/store/user.js'

const instance = axios.create({
  // Web 侧可以通过 vite.config.js 中的 proxy 配置，指定代理
  // 小程序APP里需写完整路径，如 https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release
  // 可使用条件编译,详见 https://uniapp.dcloud.io/tutorial/platform.html#preprocessor
  // #ifdef H5
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  // #endif
  // #ifndef H5
  baseURL: 'https://mock.apifox.cn/m1/1156743-0-default',
  // #endif
  adapter(config) {
    // console.log('request adapter ↓↓')
    // console.log(config)
    const { url, method, data, params, headers, baseURL, paramsSerializer } =
      config
    return new Promise((resolve, reject) => {
      uni.request({
        method: method.toUpperCase(),
        url: getFullURL(baseURL, url, params, paramsSerializer),
        header: headers,
        data,
        dataType: 'json',
        responseType: config.responseType,
        success: res => {
          // console.log('request success ↓↓')
          // console.log(res)
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },
  timeout: 8000
})

// 请求拦截
instance.interceptors.request.use(config => {
  const store = useUserStore()
  const { method } = config
  const headers = {
    // token: uni.getStorageSync('token')
    token: store.token
  }
  // 不缓存get请求
  if (method === 'get') {
    headers['Cache-Control'] = 'no-cache'
  }
  // delete请求参数放入body中
  // if(method === 'delete') {
  //   headers['Content-type'] = 'application/json;'
  //   Object.assign(config, {
  //     data: params,
  //     params: {}
  //   })
  // }

  return {
    ...config,
    headers
  }
})

// 响应拦截
instance.interceptors.response.use(response => {
  // console.log('response ↓↓')
  // console.log(response)
  if ((response.status || response.statusCode) === 200) {
    return response.data
  }
  return Promise.reject(response)
})

export default instance
