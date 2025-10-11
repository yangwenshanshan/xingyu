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
					<view class="item-content" @click="goDetail">
						<view class="content-top">
							<StarInfo></StarInfo>
							<view class="top-right" @click.stop="goChat">
								<image style="width: 32rpx;" src="../../static/bar-serve.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="content-bottom">
							<view class="content-opt">
								<view class="opt-item">
									<image style="width: 24rpx;" src="../../static/item-like.png" mode="widthFix"></image>
									<text class="item-text">345K</text>
								</view>
								<view class="opt-item">
									<image style="width: 24rpx;" src="../../static/bar-serve.png" mode="widthFix"></image>
									<text class="item-text">1293</text>
								</view>
							</view>
							<view class="content-text">他是中国新生代艺人中兼具流量与实力的代表人物，以​​演技突破​​和​​多栖发展​​著称…</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</BasePage>
		<Bar :actived="1"></Bar>
	</view>
</template>

<script setup>
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
				width: 708rpx;
				height: 710rpx;
				border-radius: 72rpx;
				margin: 0 auto;
				box-sizing: border-box;
				background: url('../../static/item-bg.png') center top no-repeat;
				background-size: 100% auto;
				position: relative;
				.content-top{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 20rpx 47rpx 0 20rpx;
					.top-right{
						background-color: #47474740;
						backdrop-filter: blur(50px);
						width: 107rpx;
						height: 107rpx;
						border-radius: 107rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
				.content-bottom{
					position: absolute;
					left: 0;
					bottom: 40rpx;
					width: 100%;
					padding-left: 40rpx;
					box-sizing: border-box;
					.content-opt{
						display: flex;
						.opt-item{
							margin-right: 27rpx;
							display: flex;
							align-items: center;
							.item-text{
								font-size: 20rpx;
								line-height: 100%;
								color: #FFFFFF;
								margin-left: 8rpx;
							}
						}
					}
					.content-text{
						font-size: 20rpx;
						color: #FFFFFF;
						width: 518rpx;
						line-height: 38rpx;
					}
				}
			}
		}
	}
}
</style>
