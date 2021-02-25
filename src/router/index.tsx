import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Router>
    <div className="router-container">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;


/**
 * 
 * 页面角色 三个角色
 * 公共页面
 * 普通页面
 * 管理员页面
 */
























