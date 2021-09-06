<template>
  <div id="OrderForm">
    <van-nav-bar
        title="我的订单"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  methods: {
    // 点击返回
    onClickLeft()
    {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
#OrderForm {
  position: relative;
  overflow: hidden;
  z-index: 999;
  height: 100%;
  background-color: #ffffff;

  /deep/ .van-nav-bar__title {
    color: white;
  }

  /deep/ .van-icon {
    color: white;
  }

  /deep/ .van-nav-bar__text {
    color: white;
  }
}
</style>