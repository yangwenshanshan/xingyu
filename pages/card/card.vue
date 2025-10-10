<template>
	<view class="card">
    <view class="status_bar"></view>
    <image mode="widthFix" style="width: 100%;" src="../../static/card-bg.png"></image>
    <view class="close" @click="goBack"></view>
  </view>
</template>

<script setup>
function goBack () {
	uni.navigateBack()
}
</script>

<style lang="scss">
.card{
  background: #161616;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }
  .close{
    position: absolute;
    top: 1138rpx;
    left: 336rpx;
    width: 75rpx;
    height: 75rpx;
  }
}
</style>
