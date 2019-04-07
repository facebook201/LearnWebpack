
import React from 'react';
import { Button } from 'element-react';

import './style/order.less';

export default class OrderItem extends React.Component {

  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data;

    return (
      <div className="order-item">
        <div className="order-avater">
          <img src={picture} height="60" width="60" className="order-item-img" />
        </div>

        <div className="order-info">
          <div className="order-name">{product}</div>
          <div className="order-sell">{shop}</div>
          <div className="order-price">{price}</div>
        </div>

        <div className="order-btn">
          <Button className={ifCommented ? 'btn--red' : 'btn-gray'} >
          { ifCommented ? '已评价' : '未评价' }
          </Button>
        </div>
      </div>
    );
  }
};

