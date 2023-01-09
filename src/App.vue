<!--
 * @Author: 王云飞
 * @Date: 2023-01-09 15:57:35
 * @LastEditTime: 2023-01-09 17:30:54
 * @LastEditors: 王云飞
 * @Description: 
 * 
-->
<!-- <script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script> -->
<script setup>
import { useUserStore } from '@/store/user.js'
const store = useUserStore()
console.log('store.token', store.token)
</script>

<style>
/*每个页面公共css */
</style>
