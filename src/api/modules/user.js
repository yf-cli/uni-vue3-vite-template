/*
 * @Author: 王云飞
 * @Date: 2022-06-21 09:55:09
 * @LastEditTime: 2022-06-23 09:52:45
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import request from '../http'
export const apiLogin = data => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
