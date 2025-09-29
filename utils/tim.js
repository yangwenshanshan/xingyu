import TencentCloudChat from '@tencentcloud/chat';
import TIMUploadPlugin from 'tim-upload-plugin';

const SDKAPPID = 1600107891
const SECRETKEY = 'beab0ef078153da3997516c1517722dfd918ca3dfb602acd7436382126b06afb'
const options = {
  SDKAppID: SDKAPPID
};
const chat = TencentCloudChat.create(options);
chat.setLogLevel(0);
// chat.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用
chat.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});

function genTestUserSig() {
  return {
    userID: '1',
    userSig: 'eJwtzMEKgkAUheF3ueuQe4dGHaGFLmqRm9RC3FkzDjdRTEWC6N0zdXm*A-8Hsjh1JtNDAMJB2C2btWlHrnhh2nDQddl1rCEgF5HQ8xWtj3l33JvZpZQCEVcdufmbJxUR7pW-VdjOzRrxljVFnrn3*KImkbxOvrri8-w4FmWVR3EbRoOlxKbhAb4-94Qu5A__'
  };
}

export default {
  tim: chat,
  TIM: TencentCloudChat,
  SDKAPPID,
  SECRETKEY,
  genTestUserSig
}