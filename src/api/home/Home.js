import {request} from "@/api/request";

export function HomeData() {
    return request({
        url: '/brand/carousel',
        method: 'get',
    })
}
