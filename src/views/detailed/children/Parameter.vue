<template>
  <div class="parameter">
    <div class="content">{{ParameterData.content}}</div>
    <div class="image">
      <img v-for="(item, index) in ParameterData.img" :key="index" :src="'http://ee.tot7.cn/' + item" width="100%" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Parameter",
    props: {
      ParameterData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
.parameter {
  .content {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
