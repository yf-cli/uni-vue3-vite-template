/*
 * @Author: 王云飞
 * @Date: 2022-06-27 15:18:29
 * @LastEditTime: 2022-06-27 16:59:58
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import uniCrazyRouter from 'uni-crazy-router'
export function setupRouter(app) {
  // 接收vue3的实例，并注册uni-crazy-router
  app.use(uniCrazyRouter)
}
/* eslint-disable */
uniCrazyRouter.beforeEach(async (to, from, next) => {
  // 逻辑代码
  // console.log('to', to)
  next()
})

uniCrazyRouter.afterEach((to, from) => {
  // 逻辑代码
})

uniCrazyRouter.onError((to, from) => {
  // 逻辑代码
})
/* eslint-enable */
