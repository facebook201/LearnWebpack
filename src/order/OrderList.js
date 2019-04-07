import React from 'react';
import OrderItem from './OrderItem';

const dataList = [
  {
    id: 1,
    shop: '漳浦土菜馆',
    picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554636947648&di=74ae83b130792e738e404a418d771805&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F09%2F2018050994820_ZAfad.jpeg',
    product: '鱼头',
    price: 29.9,
    ifCommented: true
  },
  {
    id: 2,
    shop: '漳浦土菜馆',
    picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554636947648&di=74ae83b130792e738e404a418d771805&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F09%2F2018050994820_ZAfad.jpeg',
    product: '果汁一杯',
    price: 19.9,
    ifCommented: true
  },
  {
    id: 3,
    shop: '漳浦土菜馆',
    picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554636947648&di=74ae83b130792e738e404a418d771805&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F09%2F2018050994820_ZAfad.jpeg',
    product: '红烧茄子',
    price: 30.9,
    ifCommented: false
  }
];

class OrderList extends React.Component {

  render() {
    return (

      <div className="order-list">
        {
          dataList.map(item => {
            return <OrderItem key={item.id} data={item} />
          })
        }
      </div>
    );
  }
}

export default OrderList;
