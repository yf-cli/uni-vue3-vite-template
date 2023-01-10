/*
 * @Author: 王云飞
 * @Date: 2023-01-10 09:22:51
 * @LastEditTime: 2023-01-10 09:35:49
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { setupRouter } from './router'
import uviewPlus from 'uview-plus'
import App from './App.vue'

const pinia = createPinia()

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(uviewPlus)
  setupRouter(app)
  return {
    app
  }
}
