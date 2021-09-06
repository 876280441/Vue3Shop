module.exports = {
  devServer: { disableHostCheck: true}
}
// module.exports = {
//     devServer: {
//         host: 'localhost',
//         port: 8080,
//         proxy: {
//             "server": {
//                 target: "http://ee.tot7.cn/index.php/admin",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/server': ''
//                 }
//             }
//         }
//     }
// }
