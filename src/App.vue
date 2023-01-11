<!--
 * @Author: 王云飞
 * @Date: 2023-01-09 15:57:35
 * @LastEditTime: 2023-01-11 11:20:39
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
const a = 2
console.log(a)
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
</style>
