<template>
  <div id="Contact">
    <van-nav-bar
        title="联系我们"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <van-cell-group>
      <van-field label="客服" disabled v-model="tel" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      tel: '820-8820-8820'
    }
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .van-nav-bar__title {
  color: white;
}
/deep/ .van-icon {
  color: white;
}
#Contact {
  height: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  z-index: 999;
}
.van-field {
  margin-top: 80px;
}
</style>