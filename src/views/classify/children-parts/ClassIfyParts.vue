<template>
  <div class="ClassIfyParts">
    <div class="parts-item">
      <div class="header-text">{{ClassIfy_Two_Data.two_title}}</div>
      <div class="content">
        <div class="content-list" v-for="(item, index) in ClassIfy_Two_Data.classify_two_list" :key="index" @click="ThreeData(item.id, item.name)">
          <div class="image">
            <img :src="'http://ee.tot7.cn/' + item.img" width="100%" height="100%" alt="">
          </div>
          <div class="title">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "ClassIfyParts",
    props: {
      ClassIfy_Two_Data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        goodsLists: []
      }
    },
    created() {
      console.log(this.ClassIfy_Two_Data);
    },
    methods: {
      ThreeData(id, title) {
        this.$router.push({path: '/goods_temp', query: {
            id: id,
            title: title
          }})
      }
    }
  }
</script>

<style scoped lang="less">
.ClassIfyParts {
  .parts-item {
    .header-text {
      font-size: 18px;
      font-weight: 700;
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .content-list {
        width: 28%;
        height: 120px;
        text-align: center;
        margin: 15px 0;
        .image {
          width: 100%;
          height: 82%;
        }
        .title {
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
}
</style>
