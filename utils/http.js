// /items/chat
const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `https://xingmi.app.canglandata.com${url}`,
      header: {
        Authorization: `Bearer Tx24NJznrt8ka1leJvx2Re3-ZgEDSolD`
      },
      data,
      method,
      success: (res) => {
        resolve(res.data)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

const http = {
  get: (url, params) => request(url, 'get', params),
  post: (url, data) => request(url, 'post', data),
}

export default http