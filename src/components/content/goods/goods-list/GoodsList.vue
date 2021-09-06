<template>
  <div>
    <div class="goods-list">
      <goods-item v-for="(item, index) in goodsListData" :key="index" :goods-item-data="item"></goods-item>
    </div>
    <div class="nulls">暂无更多数据</div>
  </div>
</template>

<script>
  import GoodsItem from "../goods-item/GoodsItem";
  export default {
    name: "GoodsList",
    props: {
      goodsListData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped lang="less">
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 5px;
  }
  .nulls {
    padding: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
</style>
