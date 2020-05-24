/*
 * @Author: shiyao
 * @Description: React文档和React组件
 * @Date: 2019-07-09 09:10:21
 */
import ReactDOM from 'react-dom';
import React from 'react';
import zhCN from 'antd/es/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import './styles/index.less';
// import { createStore } from 'redux';
import App from './App';

// redux 三个重要的部分 action、reducer、state（store）
// 创建一个store
// const store = createStore(counterReducer, { todo: ['s']});
// console.log(store);

ReactDOM.render(<App />, document.getElementById('root'));