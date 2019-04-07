import * as React from 'react';
import OrderList from '../order/OrderList';
import OrderHeader from '../order/OrderHeader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '张三'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: this.state.name + '11'
    });
  }

  render() {
    return ( 
      <div className="app">
        <OrderHeader />
        <OrderList />
      </div>
    );
  }
};
