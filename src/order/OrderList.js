import React from 'react';
import OrderItem from './OrderItem';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="order-list">
        <OrderItem  />
      </div>
    );
  }
}

export default OrderList;
