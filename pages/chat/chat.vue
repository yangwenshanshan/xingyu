<template>
	<view class="chat">
    <view class="status_bar"></view>
    <view class="chat-star">
      <view class="star-back" @click="goBack">
        <image style="width: 14rpx;" mode="widthFix" src="../../static/bar-back.png"></image>
      </view>
      <StarInfo></StarInfo>
    </view>
    <scroll-view class="info-list" scroll-y :style="`height: ${scrollViewHeight}`">
      <view class="list-item" v-for="item in 20" :class="item % 2 === 0 ? 'self-parent' : 'star-parent'">
        <view class="item-content" :class="item % 2 === 0 ? 'self' : 'star'">
          asdas大苏时d{{ item }}
        </view>
      </view>
    </scroll-view>
    <view class="chat-bottom-holder" :style="longPressing ? `height: 908rpx` : `height: ${bottomHeight}`"></view>
    <view class="chat-bottom" :style="`height: ${bottomHeight}`">
      <view v-if="!longPressing" class="bottom-tip" :style="moreOpen ? 'top: 74rpx' : 'top: 148rpx'">
        <image class="tip-image" src="../../static/card-small-1.png" mode="heightFix" @click="goCard"></image>
        <view class="image-parent">
          <image class="tip-image" src="../../static/card-small-2.png" mode="heightFix"></image>
          <image class="tip-image-tip" src="../../static/expectations.png" mode="heightFix"></image>
        </view>
        <image class="tip-image" src="../../static/card-small-3.png" mode="heightFix" @click="giftVisible = true"></image>
      </view>
      <view  class="opt-list" v-if="moreOpen && inputVisible && !longPressing">
        <view class="opt-item" @click="sendMsgImage"> 
          <image src="../../static/card-pic.png" mode="heightFix"></image>
          <view>图片</view>
        </view>
        <view class="opt-item" @click="sendMsgVideo">
          <image src="../../static/card-photo.png" mode="heightFix"></image>
          <view>拍摄</view>
        </view>
        <view class="opt-item" @click="showAudio">
          <image src="../../static/card-phone.png" mode="heightFix"></image>
          <view>语音</view>
        </view>
        <view class="opt-item" @click="goVideo">
          <image src="../../static/card-video.png" mode="heightFix"></image>
          <view>视频</view>
        </view>
      </view>
      <view class="opt-gift" v-if="giftVisible && !longPressing" @click="giftVisible = false">
        <image src="../../static/gift.png" mode="widthFix" class="gift-image"></image>
      </view>
      <view class="bottom-input" :class="longPressing ? 'bottom-input-pressing' : ''" :style="moreOpen ? 'bottom: 312rpx' : 'bottom: calc(80rpx)'">
        <template v-if="!longPressing">
          <image @click="inputVisibleClick(false)" v-if="inputVisible" class="input-image" src="../../static/chat-audio.png"></image>
          <image @click="inputVisibleClick(true)" v-else class="input-image" src="../../static/chat-input.png"></image>
        </template>
        <view class="input-main">
          <input v-model="inputValue" @confirm="sendMessage" :cursor-spacing="20" v-if="inputVisible" confirm-type="send" placeholder="发消息..." placeholder-style="color: #ffffff"></input>
          <view :class="longPressing ? 'long-pressing' : ''" @touchstart="handleTouchStart" @touchend="handleTouchEnd" class="main-speak" v-else>
            <template v-if="!longPressing">按住说话</template>
            <view v-else class="speaking">
              <view class="speak-loading">
                <image mode="widthFix" style="width: 298rpx;" src="../../static/chat-calling.png"></image>
              </view>
              <view class="loading-text">松开发送 上滑取消</view>
              <view class="loading-bottom">
                <image style="width: 46rpx;" mode="widthFix" src="../../static/chat-speaking.png"></image>
              </view>
            </view>
          </view>
        </view>
        <template v-if="!longPressing">
          <image v-if="!moreOpen" class="input-image" src="../../static/chat-more.png" @click="moreOpenClick(true)"></image>
          <image v-else class="input-image" src="../../static/chat-more-open.png" @click="moreOpenClick(false)"></image>
        </template>
      </view>
    </view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'

const inputValue = ref('')
const giftVisible = ref(false)
const inputVisible = ref(true)
const moreOpen = ref(false)
const longPressing = ref(false)
const bottomHeight = computed(() => {
  if (moreOpen.value) {
    return '553rpx'
  } else {
    return '395rpx'
  }
})
const scrollViewHeight = computed(() => {
  return `calc(100vh - ${bottomHeight.value} - 135rpx - var(--status-bar-height))`
})

function handleTouchStart() {
  longPressing.value = true
}
function handleTouchEnd() {
  console.log('end')
  longPressing.value = false
}
onLoad(() => {
  // console.log(111)
})
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
function showAudio () {
  uni.navigateTo({
		url: '/pages/calling/calling'
	})
}
function goBack () {
	uni.navigateBack()
}
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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all 0.2s ease-in-out;
    .bottom-tip{
      position: absolute;
      top: 0rpx;
      left: 0;
      padding-left: 20rpx;
      width: 100%;
      box-sizing: border-box;
      height: 60rpx;
      display: flex;
      transition: all 0.2s ease-in-out;
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
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 33rpx;
      position: absolute;
      bottom: 100rpx;
      width: 100%;
      left: 0;
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
    .opt-gift{
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 0;
      bottom: 0;
      z-index: 3;
      .gift-image{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
    .bottom-input{
      transition: bottom 0.2s ease-in-out;
      position: absolute;
      width: calc(100% - 40rpx);
      bottom: 0;
      left: 0;
      height: 97rpx;
      border-radius: 100rpx;
      background: #DEC3C980;
      backdrop-filter: blur(30rpx);
      display: flex;
      align-items: center;
      margin: 0 20rpx;
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
        input{
          width: 100%;
          color: #ffffff;
          font-size: 26rpx;
          text-align: left;
        }
        .main-speak{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .long-pressing{
          position: fixed;
          bottom: -80rpx;
          left: -20rpx;
          width: 100vw;
          height: 100vh;
          z-index: 50;
          .speaking{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 908rpx;
            .speak-loading{
              width: 508rpx;
              height: 137rpx;
              border-radius: 44rpx;
              background: #DEC3C980;
              backdrop-filter: blur(30px);
              margin: 175px auto 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .loading-text{
              color: #BBBBBB;
              font-size: 26rpx;
              font-weight: bold;
              margin-top: 33rpx;
            }
            .loading-bottom{
              width: 100%;
              height: 628rpx;
              padding-top: 57rpx;
              box-sizing: border-box;
              background: url('../../static/speaking-bg.png') center top no-repeat;
              background-size: 100% auto;
              margin-top: 92rpx;
            }
          }
        }
      }
    }
    .bottom-input-pressing{
      background: transparent;
      backdrop-filter: blur(0rpx);
    }
  }
  .chat-bottom-holder{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(2.56deg, rgba(45, 0, 27, 0.5) 47.8%, rgba(84, 29, 62, 0) 98.81%);
    backdrop-filter: blur(20px);
    mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
    box-sizing: border-box;
    transition: all 0.1s linear;
  }
}
</style>
