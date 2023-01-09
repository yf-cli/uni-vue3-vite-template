<!--
 * @Author: 王云飞
 * @Date: 2023-01-09 21:53:35
 * @LastEditTime: 2023-01-09 22:05:43
 * @LastEditors: 王云飞
 * @Description: 
 * 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
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
  methods: {}
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
