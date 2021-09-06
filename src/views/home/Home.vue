<template>
    <div id="home">
        <!-- 顶部导航 -->
        <van-nav-bar title="项目首页" :fixed="true" style="background-color: #39a9ed"></van-nav-bar>
        <better-scroll class="scroll">
          <!-- 轮播 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in banner" :key="index" style="height: 160px">
              <img width="100%" height="100%" :src="'http://ee.tot7.cn/'+item.img" alt="">
            </van-swipe-item>
          </van-swipe>
          <!-- 导航列表 -->
          <van-grid :column-num="3">
            <van-grid-item v-for="(item, index) in gridData" :icon="item.icon" @click="ClickLink(item.click)" :key="index" :text="item.text" />
          </van-grid>
        </better-scroll>
    </div>
</template>

<script>
import BetterScroll from '../../components/common/better-scroll/BetterScroll'

import {HomeData} from "../../api/home/Home";

export default {
  name: 'Home',
  data() {
      return {
        banner: [],
        activeName: 2,
        gridData: [{
          icon: 'newspaper-o',
          click: '/news_info',
          text: '新闻资讯'
        }, {
          icon: 'photo-o',
          click: '/picture_share',
          text: '图片分享'
        }, {
          icon: 'shop-o',
          click: '/buy_goods',
          text: '商品购买'
        }, {
          icon: 'records',
          click: '/message',
          text: '留言反馈'
        }, {
          icon: 'video-o',
          click: '/video_expert',
          text: '视频专区'
        }, {
          icon: 'chat-o',
          click: '/contact',
          text: '联系我们'
        }],
      }
  },

  created() {
    HomeData().then(res => {
      this.banner = res.data
    })
  },
  components: {
    BetterScroll
  },
  methods: {
    ClickLink(link) {
      this.$router.push(link)
    },
  }
}
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
.scroll {
  margin-top: 46px;
  margin-bottom: 50px;
  background-color: #f1f1f1;
  height: calc(100% - 46px - 50px);
  overflow: hidden;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>
