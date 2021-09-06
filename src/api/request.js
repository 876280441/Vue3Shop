import axios from 'axios'

export function request(config) {
    const api = axios.create({
        baseURL: 'http://ee.tot7.cn/index.php/admin',
        timeout: 5000
    })
    api.interceptors.request.use(success => {
        return success
    }, err => {
        console.log(err)
    })
    api.interceptors.response.use(result => {
        return result
    }, err => {
        console.log(err)
    })
    return api(config)
}