<template>
  <div id="news-info">
    <van-nav-bar
            title="新闻资讯列表"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <better-scroll class="scroll" :up-load-bool="true" @pullingUp="pullingUp" ref="scroll">
      <new-info-list :news-infos="newsInfo.list"></new-info-list>
      <div class="nulls">暂无更多数据</div>
    </better-scroll>

  </div>
</template>

<script>
  // 公共组件
  import BetterScroll from "../../../../components/common/better-scroll/BetterScroll";
  // 私有组件
  import NewInfoList from "./news-info_children/news-info-list/NewInfoList";
  // 数据请求
  import {NewInfoData} from '../../../../api/home/newinfo/new-info'

  export default {
    name: "NewsInfo",
    components: {
      BetterScroll,
      NewInfoList
    },
    data() {
      return {
        newsInfo: {
          page: 0,
          list: []
        }
      }
    },
    created() {
      this.getNewsInfo()
    },
    methods: {
      // 点击返回
      onClickLeft() {
        this.$router.go(-1)
      },
      // 获取数据
      getNewsInfo() {
        let page = this.newsInfo.page + 1
        NewInfoData(page).then(res => {
          console.log(res)
          this.newsInfo.page += 1
          this.newsInfo.list.push(...res.data.items)
        })
      },
      // 上拉加载更多数据
      pullingUp() {
        this.getNewsInfo()
        setTimeout(() => {
          this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp() // 允许再次刷新
        },500)
        this.$refs.scroll && this.$refs.scroll.scroll.refresh() // 重新计算可滚动区域
      }
    }
  }
</script>

<style scoped lang="less">
  #news-info {
    position: relative;
    z-index: 999;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    /deep/ .van-nav-bar__title {
      color: white;
    }
    /deep/ .van-icon {
      color: white;
    }
  }
  .scroll {
    margin-top: 46px;
    height: calc(100% - 46px);
    overflow: hidden;
  }
  .nulls {
    padding: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
</style>
