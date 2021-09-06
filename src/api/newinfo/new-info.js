import {request} from "../request";

export function NewInfoData(page, rows=20) {
    return request({
        url: '/brand/press',
        method: 'get',
        params: {
            page,
            rows
        }
    })
}

export function GetNewsID(id) {
    return request({
        url: '/brand/pressed',
        method: 'get',
        params: {
            id
        }
    })
}