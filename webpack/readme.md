####  1 安装



```javascript
npm install webpack -S
npm install webpack-cli -S
```





#### 2 管理资源

我们的项目中会有一个 图片 静态文件等资源。 webpack 可以把他们打包成javascript 模块。

* 加载css

  * Style-loader css-loader

* 加载 图片  file-loader url-loader

  url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，就需要使用file-loader的加载本地图片，故url-loader可以设置图片超过多少字节时，使用file-loader加载图片。

  还能处理字体

* 加载数据 csv-loader xml-loader

```javascript
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        loader: 'url-loader',
        options: [
          limit: 10000
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  }
```



#### 3 管理输出

​	如果我们修改了一个入口的起点名称 生成的包将被重命名 但是我们的html文件仍然会用旧的名字。**htmlWebpackPlugin 会生成默认的index.html  新的会覆盖老的 ** 有时候我们打包之后会有残留的dist代码。每次在重构之前先清理dist文件夹。**clean-webpack-plugin**



#### 4 开发

* 使用 source map

  可以将编译后的代码映射到原始源代码。追踪到错误代码



##### 自动化编译代码

* webpack-dev-server 

  * watch 依赖图中的所有文件进行更改 如果有一个文件被更新 代码将被重新编译

  * start 

    ```javascript
    {
        "start": "webpack-dev-server --open"
    }
    ```

    

* 热更新 webpack-dev-server

  ```javascript
    devServer: {
      contentBase: './dist',
      hot: true
    },  
    plugins: [
      new CleanWebpackPlugin('[dist]'),
      new HtmlWebpackPlugin({
        title: 'output'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  ```



##### tree shaking

**通常用于描述和移除js上下文中未引用代码。** 





##### 压缩输出

在webpack4.0 中 通过mode的模式 设置为 production 就可以

```javascript
module.exports = {
    mode: 'production'
};
```



##### 配置

在开发环境和生产环节的构建目标差异很大。在开发环境中 需要具有更强大的 功能。在生产环节中 目标是更小的 bundle 更轻量的 source map。所以建议每个环境编写**彼此独立的webpack 配置**



**webpack-merge 可以合并配置的作用**



#### source map

source map 对调试源码 和基准测试有帮助。

```javascript
  devtools: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
```





#### 代码分离 code spliting

* 入口起点 使用entry配置手动分离代码
* 防止重复 使用 CommonsChunkPlugin 去重 和 分离chunk
* 动态导入 通过模块的内联函数调用来分离代码











