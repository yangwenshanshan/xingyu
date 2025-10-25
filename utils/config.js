export const baseURL = 'https://xingmi.app.canglandata.com'
let token = ''
export function getToken () {
  return token
}
export function setToken (value) {
  token = value
}
export function getUserInfo () {
  const userInfo = uni.getStorageSync('userInfo')
  return userInfo
}