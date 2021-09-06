import {request} from "../request";

export function GetBuyGoods(page,rows=10) {
  return request({
    url: '/brand/heat?page='+page+'&rows=10',
    method: 'get',
    params: {
      page,
    }
  })
}
