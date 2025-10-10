<template>
	<view class="chat-list">
		<BasePage>
			<view class="home-title">
				<image @click="goBack" style="width: 14rpx;" src="../../static/bar-back.png" mode="widthFix"></image>
				<p>Starrice</p>
			</view>
			<view class="home-search">
				<image style="width: 696rpx;margin-top: 109rpx;" src="../../static/chat-list-title.png" mode="widthFix" />
			</view>
			<scroll-view class="people-list" scroll-y>
				<view class="people-item" v-for="item in 10">
					<view class="item-content" @click="goChat">
						<image style="height: 92rpx;" mode="heightFix" src="../../static/chat-list-1.png"></image>
					</view>
				</view>
			</scroll-view>
		</BasePage>
		<Bar :actived="2"></Bar>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const active = ref(1)
function goChat () {
	uni.navigateTo({
		url: '/pages/chat/chat'
	})
}
function goDetail () {
	uni.navigateTo({
		url: '/pages/detail/detail'
	})
}
onMounted(() => {
	setTimeout(() => {
		active.value = 2
	}, 0);
})
function goBack () {
	uni.navigateBack()
}
</script>

<style lang="scss">
.chat-list{
	.home-title{
		position: relative;
		margin-top: 50rpx;
		font-family: Questrial;
		font-weight: 400;
		font-size: 40rpx;
		color: #000000;
		text-align: center;
		align-items: center;
		line-height: 1;
		height: 40rpx;
		image{
			position: absolute;
			width: 29rpx;
			height: 29rpx;
			left: 62rpx;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	.people-list{
		height: calc(100% - 325rpx - 22rpx);
		.item-content{
			padding: 22rpx 30rpx ;
		}
	}
}
</style>
