const apiMocker = require('mocker-api');
const { resolve } = require('path');
module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8888,
    open: true,
    compress: true,
    before(app) {
      apiMocker(app, resolve('./mock/index'), {
        
      })
    }
  }
}