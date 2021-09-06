<template>
  <div id="BuyPurchase">
    <van-nav-bar
        title="支付"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <better-scroll class="scroll">
      <van-cell class="cell" @click="" style="" is-link>
        <van-icon name="location" color="#39a9ed" style="padding-right: 5px;vertical-align: middle" />添加收货地址
      </van-cell>

      <OrderList class="order" />

      <van-radio-group v-model="radio">
        <van-cell @click="" style="" is-link>
          <van-radio class="radio" name="1"><van-icon name="wechat-pay" color="green" style="padding-right: 5px;vertical-align: middle" />微信支付</van-radio>
        </van-cell>

        <van-cell @click="" style="" is-link>
          <van-radio class="radio" name="2"><van-icon name="alipay" color="#39a9ed" style="padding-right: 5px;vertical-align: middle" />支付宝支付</van-radio>
        </van-cell>
      </van-radio-group>

    </better-scroll>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

import OrderList from "./children/OrderList";

export default {
  name: "BuyPurchase",
  components: {
    BetterScroll,
    OrderList
  },
  data() {
    return {
      radio: ''
    }
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit() {

    }
  }
}
</script>

<style scoped lang="less">
#BuyPurchase {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f1f1f1;
  z-index: 999;
  overflow: hidden;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  .scroll {
    margin-top: 46px;
    margin-bottom: 50px;
    height: calc(100% - 46px - 50px);
    .cell {
      border-bottom: 10px solid #f1f1f1;
    }
    /deep/ .van-icon {
      color: black;
      font-size: 20px;
    }
    /deep/ .radio {
      .van-icon {
        color: #ffffff;
      }
    }
    /deep/ .van-icon-success {
      width: 20px;
      height: 20px;
    }
    .order {
      border-bottom: 10px solid #f1f1f1;
    }
  }
  .van-submit-bar {
    border-top: 1px solid #eee;
  }
}

</style>