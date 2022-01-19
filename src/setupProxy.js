const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/ddApi', {
      target: 'https://oapi.dingtalk.com/',
      secure: false,
    })
  )
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:3000',
      secure: false,
      changeOrigin: true,
    })
  )
}
