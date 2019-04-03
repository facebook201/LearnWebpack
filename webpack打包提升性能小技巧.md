#### webpack性能优化



* 性能分析 可视化分析

```javascript
// webpack-bundle-analyzer 可视化分析 工具
/**
安装：
npm install webpack-bundle-analyzer --save-dev
webpack.config.js 配置
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
  new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info'
  })
]
*/
```

运行webpack 命令 会自动在浏览器中的 打开127.0.0.1:8888 展示可视化图表。



* 慢在哪里 Speed Measure Plugin

```javascript
npm install speed-measure-webpack-plugin --save-dev
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

// 放在 webpack.prod.js
const prodConfig = merge(common, {
	mode: 'production',
    plugins: [
        // ... 其他配置
    ]
});

module.exports = smp.wrap(prodConfig);
```



* 提取css文件

extract-text-webpack-plugin 



* 本地mock处理





####  2 路由加载 异步加载

​      提取异步模块有利于提升页面初始化性能

```javascript
Vue.use(Router);
import Vue from 'vue';
import Router from 'vue-router';
export default new Router({
routes: [{
    path: '/a',
    component: () =>
        import ( /* webpackChunkName: 'a' */ '@/pages/a'),
    name: 'a'
}, {
    path: '/b',
    component: () => import ( /* webpackChunkName: 'b' */ '@/pages/b'),
    name: 'b',
    children: [{
            path: 'b/m',
            component: require('@/pages/b/m').default,
            name: 'm',
            children: [{
                path: 'b/m/p',
                component: require('@/pages/b/m/p').default,
                name: 'p'
            }, {
                path: 'b/m/q',
                component: require('@/pages/b/m/q').default,
                name: 'q'
            },
        ]
    }]
}]
```

thread-loader 对于打包速度几乎没有影响，是因为它本身的额外开销导致，建议只在极高性能消耗的场景下使用。 



#### 4 缓存loader的执行结果(cacheDirectory/cache-loader)

```javascript
loader: 'babel-loader?cacheDirectory=true'

rules: [
    {
        test: /\.vue$/,
        use: [
            'cache-loader',
            'vue-loader'
        ]
    }
] 
```





#### 5 模块进一步细分 splitChunks

webpack4 移除了 CommonsChunkPlugins 取而代之的是 splitChunks。splitChunks 的默认配置已经足够我们日常使用。没有特殊需求可以不必特意处理。

```javascript
optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            },
            // styles: {
            //     name: 'index',
            //     test: /.stylus|css$/,
            //     chunks: 'all',
            //     enforce: true
            // }
        }
    }
}
```

styles 部分则是合并 CSS 文件。 经过测试 在项目中，styles 部分使构建时间增加了大约2秒，放弃了这部分操作。 



#### 7 精简不必要的库 loadsh moment 

有的库有很多功能是不需要的。所以可以自己实现一小部分功能 移除他们。



#### 8 优化模块查找路径

载入内置模块 载入文件模块 载入文件目录模块 载入node_modules里的模块 自动缓存已载入模块 如果模块名不是路径，也不是内置模块，Node将试图去当前目录的node_modules文件夹里搜索。如果当前目录的node_modules里没有找到，Node会从父目录的node_modules里搜索，这样递归下去直到根目录。



