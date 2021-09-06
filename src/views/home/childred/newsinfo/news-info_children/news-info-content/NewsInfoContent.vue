<template>
  <div id="NewsInfoContent">
    <van-nav-bar
        title="新闻资讯详情"
        right-text="分享"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        @click-right="showShare = true"
        style="background-color: #39a9ed"
    />
    <better-scroll class="scroll">
      <template-info :news-content="newsContent"></template-info>
    </better-scroll>
    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
    />
  </div>
</template>

<script>
import TemplateInfo from "./template_info/TemplateInfo";

import BetterScroll from "../../../../../../components/common/better-scroll/BetterScroll";

import {GetNewsID} from "../../../../../../api/home/newinfo/new-info";

export default {
  name: "NewsInfoContent",
  components: {
    BetterScroll,
    TemplateInfo
  },
  data() {
    return {
      newsID: null,

      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      newsContent: []
    }
  },
  mounted() {
    this.newsID = this.$route.params.id
    console.log(this.newsID)
    GetNewsID(this.newsID).then(res => {
      console.log(res)
      this.newsContent = res.data
    })
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    onSelect(option) {
      this.$toast(option.name);
      this.showShare = false;
    },
  }
}
</script>

<style scoped lang="less">
#NewsInfoContent {
  position: relative;
  z-index: 999;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-nav-bar__text {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  .scroll {
    margin-top: 46px;
    height: calc(100% - 46px);
  }
}
</style>