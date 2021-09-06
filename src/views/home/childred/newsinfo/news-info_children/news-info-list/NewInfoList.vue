<template>
  <div class="news-info-list">
    <div class="news-info-item" v-for="(item,index) in newsInfos" :key="index" @click="newsContent(item.id)">
      <div class="left-img">
        <img width="100%" height="100%" :src="'http://ee.tot7.cn/' + item.img" alt="">
      </div>
      <div class="right-content">
        <p>{{item.title}}</p>
        <p>
          <span>发布时间：2020-05-21</span>
          <span>点击：{{item.count}}次</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewInfoList",
  props: {
    newsInfos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    newsContent(id) {
      this.$router.push('/news_info_content/' + id)
    }
  }
}
</script>

<style scoped lang="less">
  .news-info-list {
  .news-info-item {
    display: flex;
    height: 60px;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .left-img {
      width: 44px;
      height: 44px;
      div {
        width: 100%;
        height: 100%;
        background-color: skyblue;
      }
    }
    .right-content {
      flex: 1;
      margin-left: 8px;
      p {
        margin: 0;
      }
      p:nth-child(1) {
        width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 3px;
        font-size: 15px;
      }
      p:nth-child(2) {
        font-size: 14px;
        color: #666;
        span:nth-child(2) {
          float: right;
        }
      }
    }
  }
}
</style>
