export const baseURL = 'https://xingmi.app.canglandata.com'

export function getToken () {
  return 'Tx24NJznrt8ka1leJvx2Re3-ZgEDSolD'
}
export function getUserInfo () {
  const userInfo = uni.getStorageSync('userInfo')
  return userInfo
}