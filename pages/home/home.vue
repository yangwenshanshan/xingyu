<template>
	<view class="home">
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { tim, timEvent } from '../../utils/tim';
import http from '../../utils/http'

const email = 'yangwenshan@canglandata.com'
const password = 'oSt9cpvtUz41I43k'

onLoad(() => {
	uni.showLoading({
		mask:true
	})
  getUserInfo().then(res => {
    if (res.tencent_im_usersig) {
      imLogin(res.id, res.tencent_im_usersig + '1').catch(() => {
        updateUserSig().then(() => {
          getUserInfo().then(response => {
            if (response.tencent_im_usersig) {
              imLogin(response.id, response.tencent_im_usersig)
            }
          })
        })
      })
    } else {
      updateUserSig().then(() => {
        getUserInfo().then(response => {
          if (response.tencent_im_usersig) {
            imLogin(response.id, response.tencent_im_usersig)
          }
        })
      })
    }
  })
})

function getUserInfo () {
  return new Promise((resolve, reject) => {
    http.get('/users/me').then(res => {
      uni.setStorageSync('userInfo', res.data)
      resolve(res.data)
    }).catch(() => {
      reject()
    })
  })
}

function imLogin (userID, userSig) {
  console.log('userID', userID, userSig)
  return new Promise((resolve, reject) => {
    tim.login({userID, userSig }).then(imResponse => {
      console.log('登录成功', imResponse);
      uni.hideLoading()
      tim.on(timEvent.SDK_READY, (event) => {
        uni.redirectTo({
          url: '/pages/index/index'
        })
        resolve()
      });
    }).catch((imError) => {
      reject(imError)
    });
  })
}

function updateUserSig () {
  return http.post('/http-service/im/usersig/update')
}
</script>

<style lang="scss">
</style>
