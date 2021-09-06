<template>
  <div class="template">
    <h2>{{NewsContent[0].title}}</h2>
    <div class="create_time">
      <span><van-icon color="#000000" name="clock-o" />{{NewsContent[0].create_time}}</span>
      <span><van-icon color="#000000" name="eye-o" />{{NewsContent[0].count}}</span>
    </div>
    <div class="image">
      <img width="100%" :src="'http://ee.tot7.cn/' + NewsContent[0].img" alt="">
    </div>
    <div class="content">{{NewsContent[0].content}}</div>
  </div>
</template>

<script>
export default {
  name: "TemplateInfo",
  props: {
    NewsContent: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.template {
  padding: 10px;
  h2 {
    margin: 0;
    font-size: 28px;
    letter-spacing:4px;
  }
  .create_time {
    margin: 20px 0;
    color: #666666;
    font-size: 14px;
    span:nth-child(2) {
      float: right;
    }
  }
  .content {
    letter-spacing:2px;
    line-height: 40px;
    font-size: 18px;
  }
}
</style>