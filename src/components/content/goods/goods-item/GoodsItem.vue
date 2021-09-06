<template>
  <div class="goods-item" @click="GoodsClick()">
    <div class="image">
      <img :src="'http://ee.tot7.cn/'+goodsItemData.img[0]" width="100%" height="100%" alt="">
    </div>
    <div class="default">
      <p class="describe">{{goodsItemData.title}}</p>
      <div>
        <p class="price">
          <span>￥{{goodsItemData.Price}}.00</span>
          <span>￥{{goodsItemData.Promotion}}.00</span>
        </p>
        <p class="default-goods">
          <span>热卖中</span>
          <span>余剩100件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItemData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      GoodsClick() {
        this.$router.push('/detailed/'+this.goodsItemData.id)
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-item {
    width: 48%;
    margin: 3px;
    background-color: #fff;
    .image {
      width: 100%;
      height: 200px;
      background-color: pink;
    }
    .default {
      padding: 5px;
      box-sizing: border-box;
      p {
        margin: 0;
      }
      .describe {
        height: 38px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
      }
      .price {
        margin: 10px 0;
        span:nth-child(1) {
          font-size: 18px;
          font-weight: 700;
          color: #e2110e;
        }
        span:nth-child(2) {
          font-size: 14px;
          text-decoration: line-through;
          color: #666;
          padding-left: 10px;
        }
      }
      .default-goods {
        font-size: 14px;
        color: #666;
        span:nth-child(2) {
          float: right;
        }
      }
    }
  }
</style>
