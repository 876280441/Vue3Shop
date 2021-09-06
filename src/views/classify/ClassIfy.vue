<template>
  <div id="ClassIfy">
    <van-nav-bar
        title="分类列表"
        :fixed="true"
        style="background-color: #39a9ed"
    />
    <div class="ClassContent">
      <better-scroll class="nav-title">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item, index) in activeData"  @click="activeClick(item.name,item.id)" :key="index" :title="item.name" />
        </van-sidebar>
      </better-scroll>
      <better-scroll class="nav-content">
        <class-ify-parts :class-ify_-two_-data="classify_two"></class-ify-parts>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

import ClassIfyParts from "./children-parts/ClassIfyParts";

import {ClassIfyOneData, ClassIfyTwoData} from "../../api/classify/ClassIfy";

export default {
  name: "ClassIfy",
  components: {
    BetterScroll,
    ClassIfyParts
  },
  data() {
    return {
      activeData: [],
      activeKey: 0,

      classify_two: {
        two_title: '',
        classify_two_list: []
      }
    };
  },
  created() {
    ClassIfyOneData().then(res => {
      console.log(res.data)
      this.activeData = res.data
    })
    this.activeClick('手机数码', 1)
  },
  methods: {
    activeClick(title, id) {
      this.classify_two.two_title = title
      ClassIfyTwoData(id).then(res => {
        this.classify_two.classify_two_list = res.data
      })
      console.log(this.classify_two)
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .van-nav-bar__title {
  color: white;
}
#ClassIfy {
  height: 100%;
  overflow: hidden;
}
.ClassContent {
  overflow: hidden;
  display: flex;
  margin-top: 46px;
  margin-bottom: 50px;
  height: 100vh;
  .nav-title {
    width: 80px;
    height: calc(100% - 46px - 50px);
  }
  .nav-content {
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100% - 46px - 50px);
  }
}

</style>
