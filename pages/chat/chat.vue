<template>
	<view class="chat">
    <view class="status_bar"></view>
    <view class="chat-star">
      <view class="star-back" @click="goBack">
        <image style="width: 14rpx;" mode="widthFix" src="../../static/bar-back.png"></image>
      </view>
      <StarInfo></StarInfo>
    </view>
    <scroll-view class="info-list" scroll-y :style="moreOpen ? 'height: calc(100vh - 550rpx - 135rpx - var(--status-bar-height))' : 'height: calc(100vh - 395rpx - 135rpx - var(--status-bar-height))'">
      <view class="list-item" v-for="item in 20" :class="item % 2 === 0 ? 'self-parent' : 'star-parent'">
        <view class="item-content" :class="item % 2 === 0 ? 'self' : 'star'">
          asdas大苏时d{{ item }}
        </view>
      </view>
    </scroll-view>
    <view class="chat-bottom" :style="moreOpen ? 'bottom: 0' : 'bottom: -155rpx'">
      <view class="bottom-tip" :style="moreOpen ? 'margin-top: 74rpx' : 'margin-top: 148rpx'">
        <template v-if="!longPressing">
          <image class="tip-image" src="../../static/card-small-1.png" mode="heightFix" @click="goCard"></image>
          <view class="image-parent">
            <image class="tip-image" src="../../static/card-small-2.png" mode="heightFix"></image>
            <image class="tip-image-tip" src="../../static/expectations.png" mode="heightFix"></image>
          </view>
          <image class="tip-image" src="../../static/card-small-3.png" mode="heightFix" @click="giftVisible = true"></image>
        </template>
      </view>
      <!-- :class="longPressing ? 'longPressing' : 'input-main'"  -->
      <view class="bottom-input" data-id="nhf" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <image @click="inputVisibleClick(false)" v-if="inputVisible" class="input-image" src="../../static/chat-audio.png"></image>
        <image @click="inputVisibleClick(true)" v-else class="input-image" src="../../static/chat-input.png"></image>
        <view class="input-main">
          <input v-model="inputValue" @confirm="sendMessage" :cursor-spacing="20" v-if="inputVisible" confirm-type="send" placeholder="发消息..." placeholder-style="color: #ffffff"></input>
          <view class="main-speak" v-else>按住说话</view>
        </view>
        <image v-if="!moreOpen" class="input-image" src="../../static/chat-more.png" @click="moreOpenClick(true)"></image>
        <image v-else class="input-image" src="../../static/chat-more-open.png" @click="moreOpenClick(false)"></image>
      </view>
      <view class="opt-gift" v-if="giftVisible" @click="giftVisible = false">
        <image src="../../static/gift.png" mode="widthFix" class="gift-image"></image>
      </view>
      <view class="opt-list" v-if="moreOpen && inputVisible">
        <view class="opt-item" @click="sendMsgImage">
          <image src="../../static/card-pic.png" mode="heightFix"></image>
          <view>图片</view>
        </view>
        <view class="opt-item" @click="sendMsgVideo">
          <image src="../../static/card-photo.png" mode="heightFix"></image>
          <view>拍摄</view>
        </view>
        <view class="opt-item">
          <image src="../../static/card-phone.png" mode="heightFix"></image>
          <view>语音</view>
        </view>
        <view class="opt-item" @click="goVideo">
          <image src="../../static/card-video.png" mode="heightFix"></image>
          <view>视频</view>
        </view>
      </view>
    </view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const inputValue = ref('')
const giftVisible = ref(false)
const inputVisible = ref(true)
const moreOpen = ref(false)
const longPressing = ref(false)

function goVideo () {
  uni.showToast({
    icon: 'none',
    title: '敬请期待',
  });
}
function sendMessage () {
  uni.showToast({
    icon: 'none',
    title: inputValue.value,
  });
  inputValue.value = ''
}
function goCard () {
  uni.navigateTo({
		url: '/pages/card/card'
	})
}
function sendMsgImage () {
  uni.chooseImage({
    count: 1,
    sourceType: ['album'],
    sizeType: ['original', 'compressed'],
    success: (res) => {
      console.log(res)
    }
  })
}
function sendMsgVideo () {
  uni.chooseVideo({
    sourceType: ['camera'],
    maxDuration: 60,
    success: (res) => {
      console.log(res)
    }
  })
}
function goBack () {
	uni.navigateBack()
}
function inputVisibleClick (flag) {
  inputVisible.value = flag
  if (flag === false) {
    moreOpen.value = false
  }
}
function moreOpenClick (flag) {
  moreOpen.value = flag
  if (flag === true) {
    inputVisible.value = true
  }
}
function handleTouchStart(e) {
  console.log(e)
  if (inputVisible.value === false) {
    return
  }
  onLongPress();
}
function handleTouchEnd() {
  longPressing.value = false
}
function onLongPress() {
  longPressing.value = true
}
onLoad(() => {
  console.log(111)
})
</script>

<style lang="scss">
.chat{
  width: 100vw;
  height: 100vh;
  background-image: url('../../static/chat-bg.png');
  background-size: 100% auto;
  position: relative;
  overflow: hidden;

  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }

  .chat-star{
    margin: 17rpx 0;
    display: flex;
    .star-back{
      padding: 20rpx;
      margin-left: 10rpx;
      margin-right: 8rpx;
    }
  }

  .info-list{
    width: 100vw;
    transition: all 0.2s linear;
    .list-item{
      display: flex;
      width: 100vw;
      padding: 0 30rpx;
      box-sizing: border-box;
      margin-bottom: 33rpx;
      .item-content{
        max-width: 552rpx;
        width: fit-content;
        box-sizing: border-box;
        padding: 20rpx;
      }
      .self{
        background: #FF92C1;
        border-top-left-radius: 32rpx;
        border-top-right-radius: 8rpx;
        border-bottom-right-radius: 32rpx;
        border-bottom-left-radius: 32rpx;
      }
      .star{
        border-top-left-radius: 8rpx;
        border-top-right-radius: 32rpx;
        border-bottom-right-radius: 32rpx;
        border-bottom-left-radius: 32rpx;
        background: #FFFFFF99;
        backdrop-filter: blur(20rpx);
      }
    }
    .star-parent{
      justify-content: flex-start;
    }
    .self-parent{
      justify-content: flex-end;
    }
  }

  .chat-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 550rpx;
    background: url('../../static/chat-bottom.png');
    background-size: 100% auto;
    box-sizing: border-box;
    transition: all 0.2s linear;
    .opt-gift{
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      .gift-image{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
    .bottom-input{
      width: calc(100% - 40rpx);
      height: 97rpx;
      border-radius: 100rpx;
      background: #DEC3C980;
      backdrop-filter: blur(30rpx);
      display: flex;
      align-items: center;
      margin: 20rpx;
      padding: 0 20rpx;
      box-sizing: border-box;
      .input-image{
        width: 56rpx;
        height: 56rpx;
      }
      .input-main{
        flex: 1;
        margin: 0 20rpx;
        font-size: 26rpx;
        text-align: center;
        color: #ffffff;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .main-speak{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .longPressing{
          background: url('../../static/speaking-bg.png') center center no-repeat;
          background-size: 100% auto;
        }
        input{
          width: 100%;
          color: #ffffff;
          font-size: 26rpx;
          text-align: left;
        }
      }
    }
    .bottom-tip{
      padding-left: 20rpx;
      height: 60rpx;
      display: flex;
      .tip-image{
        height: 50rpx;
        margin-right: 25rpx;
      }
      .image-parent{
        position: relative;
        .tip-image-tip{
          height: 58rpx;
          position: absolute;
          top: -60rpx;
          left: 52rpx;
        }
      }
    }
    .opt-list{
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 33rpx;
      .opt-item{
        font-size: 24rpx;
        color: #E0E0E0;
        text-align: center;
        image{
          width: 128prx;
          height: 128rpx;
        }
      }
    }
  }
}
</style>
