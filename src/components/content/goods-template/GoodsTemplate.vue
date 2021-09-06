<template>
  <div class="GoodsTemplate">
    <van-nav-bar
        :title="GoodsName"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <better-scroll class="scroll" :up-load-bool="true" @pullingUp="pullingUp" ref="scroll">
      <goods-list :goods-list-data="goodsData.goodsList"></goods-list>
    </better-scroll>
  </div>
</template>

<script>
import GoodsList from "../goods/goods-list/GoodsList";

import BetterScroll from "../../common/better-scroll/BetterScroll";

import {ClassIfyThreeData} from "../../../api/classify/ClassIfy";

export default {
  name: "GoodsTemplate",
  data() {
    return {
      GoodsTempID: null,
      GoodsName: null,
      goodsData: {
        page: 0,
        goodsList: []
      }
    }
  },
  components: {
    BetterScroll,
    GoodsList
  },
  created() {
    this.GoodsTempID = this.$route.query.id
    this.GoodsName = this.$route.query.title
    ClassIfyThreeData(this.GoodsTempID).then(res => {
      console.log(res)
      this.goodsData.goodsList = res.data
    })
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 获取数据
    // GetGoodsData() {
    //   const page = this.goodsData.page + 1
    //   GetBuyGoods(page).then(res => {
    //     this.goodsData.page += 1
    //     this.goodsData.goodsList.push(...res.data)
    //     console.log(this.goodsData.goodsList)
    //   })
    // },
    pullingUp() {

    }
  }
}
</script>

<style scoped lang="less">
.GoodsTemplate {
  position: relative;
  z-index: 999;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
/deep/ .van-nav-bar__title {
  color: white;
}
/deep/ .van-icon {
  color: white;
}
.scroll {
  margin-top: 46px;
  height: calc(100% - 46px);
}
</style>