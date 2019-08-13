import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import zhCN from 'antd/es/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import { Button } from 'element-react';
import Upload from './packages/upload';

import Home from './pages/Home';
import About from './pages/About';

function Header() {
  return (
    <ul>
      <Upload
        action="https://jsonplaceholder.typicode.com/posts/">
        <Button type="primary">上传图片</Button>
      </Upload>
    </ul>
  );
}

ReactDOM.render((
  <Router>
    <div>
      <Header />
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  </Router>
  ), document.getElementById('root'));
