<!--
 * @Author: 王云飞
 * @Date: 2023-01-09 21:53:35
 * @LastEditTime: 2023-01-10 14:55:29
 * @LastEditors: 王云飞
 * @Description: 
 * 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="color-green color-pink" mr-9>{{ title }}</text>
      <text class="color-green font-bold ml-3">{{ title }}</text>
    </view>
    <!-- <button @click="toJump">跳转</button> -->
    <u-button text="跳转" @click="toJump" type="primary"></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {
    toJump() {
      // uni.navigateTo({
      //   url: '/pages/test/test?a=1&b=1', // 不影响原生的参数传递
      //   // 提供了基于页面级别的路由参数对象
      //   routeParams: {
      //     c: 1,
      //     d: 1
      //   },
      //   // 提供了基于跳转过程的过程参数对象
      //   passedParams: {
      //     e: 1,
      //     f: 1
      //   }
      // })
      uni.navigateTo({
        url: '/pages/demo/index'
      })
    }
  }
}
</script>

<style lang="scss">
$fz36: 72rpx;

.title {
  font-size: $fz36;
  color: $color-pr;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
