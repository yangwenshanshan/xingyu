<script>
// import tim from './utils/tim'

export default {
	onLaunch: function() {
		// const userSig = tim.genTestUserSig()
		// let promise = tim.tim.login({userID: userSig.userID, userSig: userSig.userSig});
		// promise.then(function(imResponse) {
		// 	console.log(imResponse); // 登录成功
		// 	if (imResponse.data.repeatLogin === true) {
		// 		// 标识账号已登录，本次登录操作为重复登录。
		// 		console.log(imResponse.data.errorInfo);
		// 	}
		// }).catch(function(imError) {
		// 	console.warn('login error:', imError); // 登录失败的相关信息
		// });

		
		// let onSdkReady = function(event) {
		// 	let message = tim.tim.createTextMessage({
		// 		to: '1',
		// 		conversationType: 'C2C',
		// 		payload: { text: 'Hello world!' }
		// 	});
		// 	tim.tim.sendMessage(message);
		// };
		// tim.tim.on(tim.TIM.EVENT.SDK_READY, onSdkReady);
		// let onMessageReceived = function(event) {
		// 	console.log(event)
		// };
		// chat.on(TencentCloudChat.EVENT.MESSAGE_RECEIVED, onMessageReceived);
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
	/*每个页面公共css */
</style>
