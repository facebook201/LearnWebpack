
import React from 'react';
import Button from 'antd/lib/button';

import './style/order.less';

export default class OrderItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="order-item">
        {/* 图片占位 */}
        <div className="order-avater">
          <img src="" />
        </div>

        <div className="order-info">
          <div className="order-name">产品名称</div>
          <div className="order-sell">商家名称</div>
          <div className="order-price">￥13</div>
        </div>

        <div className="order-btn">
          <Button type="primary" className="order-evelaute">评价</Button>
        </div>
      </div>
    );
  }
};

