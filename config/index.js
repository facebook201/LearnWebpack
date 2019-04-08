
const path = require('path');

module.exports = {
  build: {
    env: {
      NODE_ENV: 'production'
    },
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
    },
    prot: 8888,
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': '/public/mock'
        }
      }
    }
  }
};
