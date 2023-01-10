<!--
 * @Author: 王云飞
 * @Date: 2023-01-09 15:57:35
 * @LastEditTime: 2023-01-10 16:45:31
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

<style lang="scss">
@import 'uview-plus/index.scss';
</style>
