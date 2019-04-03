
import * as React from 'react';
import OrderList from '../order/OrderList'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <OrderList />
      </div>
    );
  }
};