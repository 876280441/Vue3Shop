import {request} from "@/api/request";

// 读取用户数据
export function GetUserInfoData(user_id) {
    return request({
        url: '/brand/information',
        method: 'post',
        data: {
            user_id
        }
    })
}

// 更新用户数据
export function UpdateUserInfoData(data) {
    return request({
        url: '/brand/upform',
        method: 'post',
        data: data
    })
}

// 获取用户收货地址
export function GetAddress(user_id) {
    return request({
        url: '/rece/lst',
        method: 'post',
        data: {
            user_id
        }
    })
}

// 添加用户地址
export function AddUserAddress(data) {
    return request({
        url: '/rece/add',
        method: 'post',
        data: data
    })
}

// 修改密码
export function UpdatePassword(id, password) {
    return request({
        url: '/brand/update',
        method: 'post',
        data: {
            id,
            password
        }
    })
}
