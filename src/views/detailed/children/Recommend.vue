<template>
  <div class="recommend">
    <h2>推荐商品</h2>
    <goods-list :goods-list-data="goodsData.goodsList"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/goods/goods-list/GoodsList";
  import {GetBuyGoods} from "../../../api/home/buyGoods/BuyGoods";

  export default {
    name: "Recommend",
    components: {
      GoodsList
    },
    data() {
      return {
        goodsData: { // 推荐数据
          page: 0,
          goodsList: []
        },
      }
    },
    mounted() {
      this.GetGoodsData()
    },
    methods: {
      // 获取数据
      GetGoodsData() {
        const page = this.goodsData.page + 1
        GetBuyGoods(page).then(res => {
          this.goodsData.page += 1
          this.goodsData.goodsList.push(...res.data)
          console.log(this.goodsData.goodsList)
        })
      },

    }
  }
</script>

<style scoped lang="less">
.recommend {
  margin-top: 10px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    //font-weight: 400;
  }
}
</style>
