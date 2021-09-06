<template>
  <div id="buy-goods">
    <van-nav-bar
        title="商品列表"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed;z-index: 9999"
    />
    <better-scroll class="scroll" :up-load-bool="true" @pullingUp="pullingUp" ref="scroll">
      <goods-list :goods-list-data="goodsData.goodsList"></goods-list>
    </better-scroll>
  </div>
</template>

<script>
import GoodsList from "../../../../components/content/goods/goods-list/GoodsList";

import BetterScroll from "../../../../components/common/better-scroll/BetterScroll";

import {GetBuyGoods} from "../../../../api/home/buyGoods/BuyGoods";

export default {
  name: "BuyGoods",
  components: {
    BetterScroll,
    GoodsList
  },
  data() {
    return {
      goodsData: {
        page: 0,
        goodsList: []
      }
    }
  },
  created() {
    this.GetGoodsData()
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 获取数据
    GetGoodsData() {
      const page = this.goodsData.page + 1
      GetBuyGoods(page).then(res => {
        this.goodsData.page += 1
        this.goodsData.goodsList.push(...res.data)
        console.log(this.goodsData.goodsList)
      })
    },
    // 上拉加载更多数据
    pullingUp() {
      this.GetGoodsData()
      setTimeout(() => {
        this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp() // 允许再次刷新
      },500)
      this.$refs.scroll && this.$refs.scroll.scroll.refresh() // 重新计算可滚动区域
    }
  }
}
</script>

<style scoped lang="less">
#buy-goods {
  position: relative;
  z-index: 999;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
}
.scroll {
  margin-top: 46px;
  background-color: #f1f1f1;
  height: calc(100% - 46px);
  overflow: hidden;
}
</style>
