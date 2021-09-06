import {request} from "../request";

export function UserCart(data) {
  return request({
    url: '/cart/lst',
    method: 'post',
    data: data
  })
}
