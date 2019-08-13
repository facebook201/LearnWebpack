module.exports = {
  "parserOptions": {
    "ecmaVersion": 6, // ECMAScript版本，7为ES7
    "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
    // "ecmaFeatures": { // 使用额外的语言特性
    //   "jsx": true // 启用JSX
    // }
  },
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  // 避免访问未定义的环境变量而发出告警
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  // babel-eslint 的需求要 babel-core 版本号要大于7.2 这里我就不配 后面会配置
  // "parser": "babel-eslint"
  // 脚本在执行期间访问的额外的全局变量
  // 避免访问未定义的环境变量而发出告警
  "globals": {
    "document": true,
    "navigator": true,
    "window":true,
    "node":true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  // 定制自己的规则
  "rules": {
    // "indent": ["error", 2],
  }
};