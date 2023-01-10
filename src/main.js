/*
 * @Author: 王云飞
 * @Date: 2023-01-10 09:22:51
 * @LastEditTime: 2023-01-10 09:28:32
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { setupRouter } from './router'
import App from './App.vue'

const pinia = createPinia()

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  setupRouter(app)
  return {
    app
  }
}
