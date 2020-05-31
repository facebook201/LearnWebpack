

### 单元测试 jest
babel舍弃了以前的babel-*-*的命名方式，改成了@babel/*-*。修改依赖和.babelrc文件后就能正常启动项目了。babel-core7.0之后，包名升级为@babel/core。

```
"@babel/core": "^7.2.2",
"@babel/preset-env": "^7.3.1",
"@babel/preset-react": "^7.0.0",
"babel-loader": "^8.0.5",

// 修改 babelrc
{ "presets":["@babel/react","@babel/env",]}
```


### storyBook

**npx -p @storybook/cli sb init --type react** 

