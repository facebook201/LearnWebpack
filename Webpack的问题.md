### 报错和解决方法



> Module build failed Unknow wrod

这里是css-loader的配置问题。 需要加style-loader 写在css-loader 之前。二是要将整个css配置注释掉。

#### 新增Typescript的写法
webpack配置注意一下开发环境的 devtool。






