import {request} from "../request";

export function LogIn(data) {
  return request({
    url: '/brand/login',
    method: 'post',
    data: data
  })
}
export function LogOn(data) {
  return request({
    url: '/brand/insert',
    method: 'post',
    data: data
  })
}
