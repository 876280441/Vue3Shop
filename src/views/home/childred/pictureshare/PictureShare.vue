<template>
  <div id="picture-share">
    <van-nav-bar
        title="图片分享列表"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <van-tabs @click="TabClick" class="tabs">
      <van-tab v-for="(item,index) in tabData" class="tabs_item" :key="index" :title="item">
        <div class="tab_content">
          <better-scroll class="scroll">
            <PictureList :picture-data="pictureData" />
          </better-scroll>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import BetterScroll from "../../../../components/common/better-scroll/BetterScroll";

import PictureList from "./children/PictureList";

export default {
  name: "PictureShare",
  components: {
    BetterScroll,
    PictureList
  },
  data() {
    return {
      tabData: ['全部', '家居生活' , '摄影设计', '明星美女', '丰富美食', '宠物乐园'],
      pictureData: [],
    }
  },
  created() {
    this.TabClick(0)
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 监听tab栏目
    TabClick(title) {
      switch (title) {
        case 0: this.pictureData = [
          {
            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496571732,442429806&fm=26&gp=0.jpg',
            title: '12312觉得萨克加上可抵扣觉得萨克加上可抵扣'
          }
        ];break;
        case 1:this.pictureData = [
          {
            img: 'https://scpic.chinaz.net/files/pic/pic/b/jiajubs_66b.jpg',
            title: ''
          }, {
            img: 'https://scpic.chinaz.net/files/pic/pic/b/jiajubs_404b.jpg',
            title: ''
          }, {
            img: 'https://scpic.chinaz.net/files/pic/pic9/202008/bpic20896.jpg',
            title: '古典与时尚的提炼，高雅与通俗的结晶——欧韩照明，带给您不同寻常的光明'
          }, {
            img: 'https://scpic.chinaz.net/files/pic/pic9/201509/apic15153.jpg',
            title: '很多人在装修的时候会潜意识的拒绝红色，觉得红色俗气，其实这是你对红色的刻板印象，红色显得俗气只能证明你搭配不当。风情万种的红色家居虽然比较大胆，但是搭配的好的话，效果相当的惊艳，技巧方法学起来，让激情饱满的红色来点亮你家。'
          }, {
            img: 'https://scpic.chinaz.net/files/pic/pic9/201503/mpic107.jpg',
            title: '简单也是一种美/ 纯净的颜色,搭配任一款家具,尽显浪漫生活气息,满走您对居家生活的无止境'
          }, {
            img: 'https://scpic.chinaz.net/files/pic/pic9/202006/apic25818.jpg',
            title: '我家的厨房很干净漂亮,因为每天晚饭后,我都把厨房擦得干干净净'
          }
        ]; break;
      }
    }
  }
}
</script>

<style scoped lang="less">
#picture-share {
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 999;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
}
.tabs {
  height: 100vh;
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
}
.tab_content {
  height: 100vh;
}
.scroll {
  height: calc(100% - 90px);
  overflow: hidden;
}

</style>
