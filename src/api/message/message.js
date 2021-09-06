import {request} from "../request";

export function GetUserMsg(data) {
    return request({
        url: '/brand/leaving',
        method: 'post',
        data: data
    })
}
