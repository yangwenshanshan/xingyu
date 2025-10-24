<template>
	<view class="chat-list">
		<BasePage>
			<view class="home-title">
				<image @click="goBack" style="width: 14rpx;" src="../../static/bar-back.png" mode="widthFix"></image>
				<p>Starrice</p>
			</view>
			<view class="home-search">
				<image src="../../static/chat-list-title.png" mode="widthFix" />
			</view>
			<scroll-view class="people-list" scroll-y>
				<view class="people-item" v-for="item in chatList" :key="item.id">
					<view class="item-content" @click="goChat(item)">
						<view class="item-avatar">
							<image mode="widthFix" v-if="item.idol && item.idol.user && item.idol.user.avatar" :src="getImage(item.idol.user.avatar)"></image>
							<image mode="widthFix" v-else src="../../static/default-icon.png"></image>
							<!-- <view class="avatar-count" :class="item * 20 < 99 ? 'round' : 'auto-round'">{{ item * 20 }}</view> -->
						</view>
						<view class="item-info">
							<view class="info-name">{{ item.idol.name }}</view>
							<view class="info-text">{{ item.messages && item.messages[0] ? item.messages[0].text_content : '' }}</view>
						</view>
						<view class="item-time">10:19</view>
					</view>
				</view>
			</scroll-view>
		</BasePage>
		<Bar :actived="2"></Bar>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { getUserInfo } from '../../utils/config'
import http from '../../utils/http'
import { getImage } from '../../utils/util'

const chatList = ref([])
function goChat (item) {
	uni.navigateTo({
		url: '/pages/chat/chat?idol=' + item.idol.id
	})
}
onShow(() => {
	http.get('/items/chat', {
		limit: 20,
		filter: {
			_and: [
				{
					user: {
						_eq: getUserInfo().id
					}
				}
			]
		},
		fields: [
			'id',
			'heat_value',
			'idol.user',
			'idol.user.avatar',
			'idol.name',
			'idol.id',
			'user.id',
			'user.first_name',
			'user.last_name',
			'user_defined_prompt',
			'messages.text_content',
			'messages.date_created',
		],
		sort: 'id',
		page: 1,
		deep: {
			messages: {
				_limit: 1,
				_sort: '-date_created',
			}
		}
	}).then(res => {
		console.log(res.data)
		chatList.value = res.data
	})
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
			left: 34rpx;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	.home-search{
		width: 696rpx;
		height: 114rpx;
		margin: 109rpx auto 0 auto;
		image{
			width: 100%;
		}
	}
	.people-list{
		height: calc(100% - 300rpx - 22rpx);
		.item-content{
			padding: 22rpx 30rpx;
			height: 152rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.item-avatar{
				margin-right: 24rpx;
				display: flex;
				align-items: center;
				position: relative;
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
				.avatar-count{
					position: absolute;
					top: -16rpx;
					right: -9rpx;
					background-color: #FF0000;
					height: 34rpx;
					font-size: 21rpx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 34rpx;
				}
				.round{
					width: 34rpx;
				}
				.auto-round{
					width: fit-content;
					padding: 0 5rpx;
				}
			}
			.item-info{
				flex: 1;
				.info-name{
					font-size: 32rpx;
					font-weight: bold;
					color: #141414;
				}
				.info-text{
					width: 500rpx;
					color: #A1A1A1;
					font-size: 26rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.item-time{
				margin-top: 8rpx;
				color: #ADADAD;
				font-size: 22rpx;
				height: 100%;
			}
		}
	}
}
</style>
