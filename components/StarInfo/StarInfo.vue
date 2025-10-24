<template>
  <view class="star-info">
    <view class="info-avatar">
      <image :src="image" style="width: 84rpx;height: 84rpx;border-radius: 50%;" mode="widthFix"></image>
    </view>
    <view class="info-name">
      <view class="name-level">
        <view style="margin-right: 10rpx;">{{ name }}</view>
        <image src="../../static/avatar-level.png" style="width: 60rpx;height: 30rpx;" mode="widthFix"></image>
      </view>
      <view class="name-desc">{{ desc }}</view>
    </view>
  </view>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
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
})
const image = computed(() => {
  return `https://xingmi.app.canglandata.com/assets/${props.icon}?access_token=Tx24NJznrt8ka1leJvx2Re3-ZgEDSolD`
})
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