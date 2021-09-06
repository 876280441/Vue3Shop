import {request} from "../request";

// 一级分类
export function ClassIfyOneData() {
  return request({
    url: '/brand/linkage',
    method: 'get'
  })
}

// 二级分类
export function ClassIfyTwoData(id) {
  return request({
    url: '/brand/eli',
    method: 'get',
    params: {
      id
    }
  })
}

// 三级分类
export function ClassIfyThreeData(id) {
  return request({
    url: '/brand/dity',
    method: 'get',
    params: {
      id
    }
  })
}