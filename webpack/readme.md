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



























