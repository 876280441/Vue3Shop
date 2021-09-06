<template>
  <div id="shopping-cart">
    <van-nav-bar
            title="购物车"
            :fixed="true"
            style="background-color: #39a9ed"
    />
      <better-scroll v-if="userToken" class="scroll">
        <ShopCartList :cart-data="cartData" />
      </better-scroll>
      <div v-if="userToken" class="purchase">
        <van-submit-bar :price="$store.state.SumPrice" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="$store.state.allCheck" @click="AllCheck()">全选</van-checkbox>
        </van-submit-bar>
      </div>
    <van-empty v-if="userToken == null" description="请登录" @click.native="login()" />
  </div>
</template>

<script>
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

import ShopCartList from "./children/ShopCartList";

import {UserCart} from "../../api/shoppingcart/ShoppingCart";

export default {
  name: "ShoppingCart",
  components: {
    BetterScroll,
    ShopCartList
  },
  data() {
    return {
      userToken: '',
      userID: null,

      // 购物车数据
      cartData: [],

    }
  },
  created() {
    this.userToken = window.sessionStorage.getItem('token')
    this.userID = window.sessionStorage.getItem('userid')

    let id = parseInt(this.userID)
    UserCart({user_id: id, page: 1, tol: 15}).then(res => {
      console.log(res)
      if(res.data.message) {
        this.cartData = []
      } else {
        this.cartData = res.data
      }
      console.log(this.cartData)
    })
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    // 结算
    onSubmit() {
      this.$router.push('/buy_purchase')
    },
    // 购物车全选
    AllCheck() {
      this.$store.commit('AllCheck')
      for(let k in this.cartData) {
        this.cartData[k].isCheck = this.$store.state.allCheck
      }
    }
  }
}
</script>

<style scoped lang="less">
#shopping-cart {
  height: 100%;
  overflow: hidden;
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
.purchase {
  .van-submit-bar {
    margin-bottom: 50px;
  }
}
.scroll {
  margin-top: 46px;
  margin-bottom: 100px;
  height: calc(100% - 46px - 100px);
  background-color: #f1f1f1;
}
</style>
