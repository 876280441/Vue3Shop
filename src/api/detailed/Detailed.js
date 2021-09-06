import {request} from "../request";

// 获取商品详细数据
export function Detailed(commodity_id) {
  return request({
    url: '/spec/detailed',
    method: 'get',
    params: {
      commodity_id
    }
  })
}

// 加入购物车
export function AddCart(data) {
  return request({
    url: '/cart/add',
    method: 'post',
    data: data
  })
}
