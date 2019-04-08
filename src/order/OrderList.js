import React from 'react';
import OrderItem from './OrderItem';
import { getOrderData } from '../api/order';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getOrderData().then(res => {
      if (res.errno == 0) {
        this.setState({
          data: res.data
        })
      }
    })
  }

  render() {
    return (
      <div className="order-list">
        {
          this.state.data.map(item => {
            return <OrderItem key={item.id} data={item} />
          })
        }
      </div>
    );
  }
}

export default OrderList;
