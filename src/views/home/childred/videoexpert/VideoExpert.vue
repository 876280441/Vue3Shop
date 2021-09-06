<template>
  <div id="VideoExpert">
    <van-nav-bar
        title="视频专区"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
  </div>
</template>

<script>
export default {
  name: "VideoExpert",
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
</style>