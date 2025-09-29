<template>
	<view class="home">
		<BasePage>
			<view class="home-title">
				<image src="../../static/home-left.png" alt="" />
				<p>Starrice</p>
			</view>
			<view class="home-search">
				<image src="../../static/home-search.png" alt="" />
			</view>
			<scroll-view class="people-list" scroll-y>
				<view class="people-item" v-for="item in 5">
					<view class="item-content"></view>
				</view>
			</scroll-view>
		</BasePage>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
.home{
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
	.home-search{
		width: 696rpx;
		height: 80rpx;
		margin: 60rpx auto 0 auto;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.people-list{
		height: calc(100% - 230rpx - 22rpx);
		padding-top: 22rpx;
		.people-item{ 
			padding: 22rpx 0;
			.item-content{
				background: #FFD0D0;
				width: 708rpx;
				height: 710rpx;
				border-radius: 72px;
				margin: 0 auto;
			}
		}
	}
}
</style>
