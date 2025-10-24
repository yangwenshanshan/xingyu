<template>
	<view class="home"></view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { tim, timEvent } from '../../utils/tim';
import { getUserInfo } from '../../utils/config';

onLoad(() => {
	uni.showLoading({
		mask:true
	})
  let promise = tim.login({userID: getUserInfo().id, userSig: 'eJwtzc0KgkAUBeB3mW0pd*44f0K7aBFKiNJem1GGtMQGkaJ3z9Tl-Q7n3A8pkjwc7UBigiGQ-XI7Yx-e1W5hpRGkwjKgEmUQUVMGSjAdREqoG6uxYkpvvZe5l33vDImpAKCgJaNrYqfeDXZ2zjkCwKredX*TAhSPNMNtxTXz22hs0wLwmgBnpzx7pijrJj16beW7tZ6N3Xm4TJXY0exAvj8UcjcU' });
  promise.then(function(imResponse) {
    console.log('登录成功', imResponse);
      tim.on(timEvent.SDK_READY, (event) => {
        console.log('yws ready', event)
        uni.hideLoading()
        uni.redirectTo({
          url: '/pages/index/index'
        })
      });
    if (imResponse.data.repeatLogin === true) {
      // 标识账号已登录，本次登录操作为重复登录。
      console.log(imResponse.data.errorInfo);
    }
  }).catch(function(imError) {
    console.warn('login error:', imError); // 登录失败的相关信息
  });
})
</script>

<style lang="scss">
</style>
