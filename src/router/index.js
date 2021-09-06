import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
    // 首页视图
  {
    path: '/home',
    component: () => import('../views/home/Home'),
  },
    // 新闻资讯视图
  {
    path: '/news_info',
    component: () => import('../views/home/childred/newsinfo/NewsInfo')
  },
    // 新闻资讯详情
  {
    path: '/news_info_content/:id',
    component: () => import('../views/home/childred/newsinfo/news-info_children/news-info-content/NewsInfoContent')
  },
    // 图片分享
  {
    path: '/picture_share',
    component: () => import('../views/home/childred/pictureshare/PictureShare')
  },
    // 推荐商品
  {
    path: '/buy_goods',
    component: () => import('../views/home/childred/buygoods/BuyGoods')
  },
    // 用户留言
  {
    path: '/message',
    component: () => import('../views/home/childred/message/Message')
  },
    // 视频专区
  {
    path: '/video_expert',
    component: () => import('../views/home/childred/videoexpert/VideoExpert')
  },
    // 联系我们
  {
    path: '/contact',
    component: () => import('../views/home/childred/contact/Contact')
  },
    // 详情视图
  {
    path: '/detailed/:id',
    component: () => import('../views/detailed/Detailed')
  },
    // 商品列表模板
  {
    path: '/goods_temp',
    name: 'goods_temp',
    component: () => import('../components/content/goods-template/GoodsTemplate')
  },
    // 分类视图
  {
    path: '/classify',
    component: () => import('../views/classify/ClassIfy')
  },
    // 购物车
  {
    path: '/shopping_cart',
    component: () => import('../views/shoppingcart/ShoppingCart')
  },
    // 支付
  {
    path: '/buy_purchase',
    component: () => import('../views/buypurchase/BuyPurchase')
  },
    // 我的
  {
    path: '/profile',
    component: () => import('../views/profile/ProFile')
  },
    // 订单
  {
    path: '/order_form',
    component: () => import('../views/profile/children/orderform/OrderForm')
  },
    // 收货地址
  {
    path: '/putaddress',
    component: () => import('../views/profile/children/putaddress/PutAddress')
  },
    // 添加收货地址
  {
    path: '/address',
    component: () => import('../views/profile/children/putaddress/Address')
  },
    // 修改用户信息
  {
    path: '/personal/:id',
    component: () => import('../views/profile/children/personal/Personal')
  },
    // 设置
  {
    path: '/setting',
    component: () => import('../views/profile/children/setting/Setting')
  },
    // 修改密码
  {
    path: '/update_pass',
    component: () => import('../views/profile/children/updatepassword/UpdatePassword')
  },
  // 登录
  {
    path: '/login',
    component: () => import('../views/user-login/login/LogIn')
  },
    // 注册
  {
    path: '/logon',
    component: () => import('../views/user-login/logon/LogOn')
  }
]

const router = new VueRouter({
  routes
})

export default router
