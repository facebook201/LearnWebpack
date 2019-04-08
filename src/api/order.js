import request from './request';

export const getOrderData = () =>
  request({
    url: '/api/order',
    method: 'get',
  });


