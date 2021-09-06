<template>
  <div class="shop-cart-list">
    <van-empty v-if="cartData.length === 0" description="购物车竟然是空的" />
    <div v-else class="shop-item" v-for="(item, index) in cartData" :key="index">
      <div class="checkbox">
        <van-checkbox v-model="item.isCheck" @click="isCheck()"></van-checkbox>
      </div>
      <div class="image">
        <img :src="'http://ee.tot7.cn/' + item.img.split(',')[0]" width="100%" height="100%" alt="">
      </div>
      <div class="parm">
        <p>{{item.title}}</p>
        <p>
          <span>{{item.model}}</span>
        </p>
        <div class="parm-number">
          <span>￥<i>{{item.Price}}</i>.00</span>
          <van-stepper @change="GoodsNumber(item.countss)" v-model="item.countss" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCartList",
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  created() {
    this.$store.state.SumPrice = 0
    this.$store.state.allCheck = false
  },
  methods: {
    isCheck() {
      let allCheck = false
      for(let k in this.cartData) {
        if(this.cartData[k].isCheck === true) {
          console.log(this.cartData[k].Price)
          this.$store.commit('SumPrice', parseInt(this.cartData[k].Price) * parseInt(this.cartData[k].countss))
          allCheck = true
        } else {
          allCheck = false
        }
      }
      console.log(allCheck)
      this.$store.commit('AllChecked', allCheck)
    },
    GoodsNumber(value) {
      this.$store.state.SumPrice = 0
      this.isCheck()
    }
  }
}
</script>

<style scoped lang="less">
.shop-cart-list {
  .shop-item {
    display: flex;
    width: 100%;
    height: 120px;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: #ffffff;
    .checkbox {
      width: 40px;
      height: 100%;
      padding: 30px 10px;
      box-sizing: border-box;
    }
    .image {
      width: 80px;
      height: 100%;
      background-color: green;
    }
    .parm {
      flex: 1;
      padding: 0 10px;
      box-sizing: border-box;
      p:nth-child(1) {
        width: 240px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        margin: 0;
      }
      p:nth-child(2) {
        width: 175px;
        margin: 0;
        font-size: 12px;
        color: #666666;
        margin: 10px 0;
      }
      .parm-number {
        .van-stepper {
          float: right;
        }
        span {
          color: #ee0a24;
          font-size: 14px;
          i {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
