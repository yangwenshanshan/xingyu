<template>
  <view class="star-info">
    <view class="info-avatar">
      <image src="../../static/default-icon.png" style="width: 84rpx;height: 84rpx;" mode="widthFix"></image>
    </view>
    <view class="info-name">
      <view class="name-level">
        <view style="margin-right: 10rpx;">易烊千玺</view>
        <image src="../../static/avatar-level.png" style="width: 60rpx;height: 30rpx;" mode="widthFix"></image>
      </view>
      <view class="name-desc">中国内地演员，歌手</view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.star-info{
  width: 338rpx;
  box-sizing: border-box;
  background: #47474740;
  backdrop-filter: blur(40rpx);
  border-radius: 100rpx;
  padding: 12rpx;
  display: flex;
  align-items: center;
  .info-avatar{
    display: flex;
    align-items: center;
    margin-right: 16rpx;
  }
  .info-name{
    color: #fff;
    .name-level{
      display: flex;
      align-items: center;
      font-size: 29rpx;
    }
    .name-desc{
      font-size: 20rpx;
    }
  }
}
</style> 