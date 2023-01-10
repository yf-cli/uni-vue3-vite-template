/*
 * @Author: 王云飞
 * @Date: 2022-06-23 10:44:54
 * @LastEditTime: 2022-06-24 11:02:15
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import buildURL from 'axios/lib/helpers/buildURL'
export const getFullURL = (baseURL, url, params, paramsSerializer) => {
  if (url.startsWith('http')) {
    return buildURL(url, params, paramsSerializer)
  }
  baseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  url = url.startsWith('/') ? url.slice(1) : url
  return buildURL(`${baseURL}${url}`, params, paramsSerializer)
}
