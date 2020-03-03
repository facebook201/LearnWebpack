import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

// neteds route

const AppRoutes = () => (
  <BrowserRouter>
    <div className="router-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
