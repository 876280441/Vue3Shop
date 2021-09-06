<template>
  <div class="goods">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in GoodsData.banner" :key="index"><img :src="'http://ee.tot7.cn/' + item" width="100%" height="100%" alt=""></van-swipe-item>
    </van-swipe>
    <div class="detail">
      <div class="price">
        <span>￥<i>{{GoodsData.Price}}</i>.00</span>
        <span>￥{{GoodsData.Promotion}}.00</span>
      </div>
      <h2>{{GoodsData.title}}</h2>
      <div class="give">
        <span><van-icon name="passed" />运费险</span>
        <span><van-icon name="passed" />支持7天无理由退货</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Goods",
    props: {
      GoodsData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
.goods {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 200px;
    background-color: pink;
  }
  .detail {
    padding: 10px;
    border-bottom: 10px solid #f1f1f1;
    .price {
      margin-bottom: 5px;
      span:nth-child(1) {
        color: #e2110e;
        font-size: 18px;
        i {
          font-style: normal;
          font-size: 32px;
          font-weight: 700;
        }
      }
      span:nth-child(2) {
        padding-left: 10px;
        font-size: 16px;
      }
    }
    .give {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      color: #666;
      font-size: 12px;
      /deep/ .van-icon {
        color: #666;
        font-size: 16px;
        vertical-align: middle;
      }
    }
    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 18px;
    }
  }
}
</style>
