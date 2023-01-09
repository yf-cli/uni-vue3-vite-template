/*
 * @Author: 王云飞
 * @Date: 2023-01-09 17:17:37
 * @LastEditTime: 2023-01-09 17:31:13
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', {
  state: () => ({ count: 0, token: 'rtfyuyio' }),
  getters: {
    double: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
