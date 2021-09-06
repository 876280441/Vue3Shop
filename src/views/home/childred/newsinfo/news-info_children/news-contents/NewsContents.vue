<template>
  <div class="NewsContents">
    <van-nav-bar
        title="新闻资讯列表"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
<!--        <new-info-list></new-info-list>-->
<!--        <van-cell v-for="(item, index) in list" :key="index" :title="item" />-->
        <div class="news-info-item" v-for="(item,index) in list" :key="index">
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
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import NewInfoList from "../news-info-list/NewInfoList";
import {NewInfoData} from "../../../../../../api/home/newinfo/new-info";

export default {
  name: "NewsContents",
  components: {
    NewInfoList
  },
  data() {
    return {
      newsID: null,

      list: [],
      page: 0,
      total: null,
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  created() {
    this.newsID = this.$route.params.id
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= this.total) {
          this.finished = true;
        }
      }, 1000);
    },
    // 获取数据
    getNewsInfo() {
      let page = this.page + 1
      NewInfoData(page).then(res => {
        this.page += 1
        this.list.push(...res.data.items)
        this.total = res.data.total
      })
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
}
</script>

<style scoped lang="less">
/deep/ .van-nav-bar__title {
  color: white;
}
/deep/ .van-icon {
  color: white;
}
.van-pull-refresh {
  margin-top: 46px;
  margin-bottom: 50px;
}
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
</style>