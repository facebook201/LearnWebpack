
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
    prot: 8089,
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8089',
        pathRewrite: {
          '^/api': '/public/mock'
        }
      }
    }
  }
};
