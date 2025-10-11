<template>
	<view class="detail">
		<BasePage>
			<view class="detail-title">
        <view class="detail-left" @click="goBack">
          <image style="width: 14rpx;" mode="widthFix" src="../../static/bar-back.png"></image>
        </view>
        <view class="detail-right">
          <image style="width: 98rpx;margin-right: 25rpx;" mode="widthFix" src="../../static/detail-friend.png"></image>
          <image style="width: 20rpx;" mode="widthFix" src="../../static/detail-more.png"></image>
        </view>
			</view>
			<view class="detail-avatar">
				<image class="avatar-img" src="../../static/default-icon.png" mode="widthFix"></image>
				<view class="avatar-name">@易烊千玺</view>
				<view class="avatar-desc">中国内地，演员，歌手，人气少年偶像组合TFBOYS成员</view>
			</view>
			<view class="deail-info">
				<view class="info-item">
					<view class="item-count">9008.3万</view>
					<view class="item-name">粉丝</view>
				</view>
				<view class="info-item">
					<view class="item-count">37.8亿</view>
					<view class="item-name">获赞</view>
				</view>
				<view class="info-item">
					<view class="item-count">166</view>
					<view class="item-name">发布</view>
				</view>
			</view>
			<view class="detail-type">
				<image mode="widthFix" src="../../static/detail-type.png"></image>
			</view>
			<view class="detail-line">
				<image mode="widthFix" src="../../static/detail-line.png"></image>
			</view>
			<view class="detail-publish-list">
				<view class="publish-item">
					<image mode="widthFix" src="../../static/detail-holder-1.png"></image>
				</view>
				<view class="publish-item">
					<image mode="widthFix" src="../../static/detail-holder-2.png"></image>
				</view>
			</view>
		</BasePage>
		<Bar :actived="1"></Bar>
	</view>
</template>

<script setup>
function goBack () {
	uni.navigateBack()
}
</script>

<style lang="scss">
.detail{
	.detail-title{
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
		.detail-left{
			position: absolute;
			width: 29rpx;
			height: 29rpx;
			left: 34rpx;
			top: 0;
			bottom: 0;
			margin: auto 0;
      display: flex;
      align-items: center;
		}
    .detail-right{
      position: absolute;
			right: 37rpx;
			top: 0;
			bottom: 0;
      display: flex;
      align-items: center;
    }
	}
	.detail-avatar{
		margin-top: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.avatar-img{
			width: 204rpx;
			margin-bottom: 16rpx;
		}
		.avatar-name{
			font-weight: bold;
			color: #000000;
			font-size: 36rpx;
			margin-bottom: 14rpx;
		}
		.avatar-desc{
			color: #A1A1A1;
			font-size: 20rpx;
			width: 430rpx;
			padding: 0 20rpx;
			text-align: center;
		}
	}
	.deail-info{
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
		padding: 0 100rpx;
		.info-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			.item-count{
				color: #000000;
				font-size: 26rpx;
				font-weight: bold;
			}
			.item-name{
				color: #A1A1A1;
				font-size: 20rpx;
			}
			&:nth-of-type(2) {
				width: 232rpx;
				position: relative;
				&::after{
					content: '';
					display: inline-block;
					height: 33rpx;
					width: 1rpx;
					background-color: #D9D9D9;
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto 0;
				}
				&::before{
					content: '';
					display: inline-block;
					height: 33rpx;
					width: 1rpx;
					background-color: #D9D9D9;
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					margin: auto 0;
				}
			}
		}
	}
	.detail-type{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 56rpx;
		image{
			width: 552rpx;
		}
	}
	.detail-line{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30rpx 0 22rpx 0;
		image{
			width: 686rpx;
		}
	}
	.detail-publish-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 24rpx;
		.publish-item{
			image{
				width: 342rpx;
				display: block;
			}
		}
	}
}
</style>
