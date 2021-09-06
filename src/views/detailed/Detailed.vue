<template>
  <div class="Detailed">
    <van-nav-bar
            title="商品详情"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed;z-index: 2;"
    />
    <div class="header-tab">
      <div class="tab-item" v-for="(item, index) in tab_item" :key="index"
           @click="Choose(index)">
        <span :class="isChoose === index ? 'choose' : ''">{{item}}</span>
      </div>
    </div>
    <better-scroll class="scroll" :up-load-bool="true" @ScrollPosition="ScrollPosition" :scroll-start="3" @pullingUp="pullingUp" ref="scroll">
      <Goods ref="goods" :goods-data="GoodsData" />
      <Parameter ref="parameter" :parameter-data="Parameters"/>
      <Comment ref="comment" />
      <Recommend ref="recommend"/>
    </better-scroll>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="danger" @click="onClickButton" text="购买" />
    </van-goods-action>
    <van-sku
            ref="sku"
            v-model="show"
            :sku="sku"
            :goods="goods"
            :hide-stock="sku.hide_stock"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
  import BetterScroll from "@/components/common/better-scroll/BetterScroll";

  import Goods from "./children/Goods";
  import Parameter from "./children/Parameter";
  import Comment from './children/Comment'
  import Recommend from "./children/Recommend";


  import {Detailed, AddCart} from "../../api/detailed/Detailed";

  export default {
    name: "Detailed",
    components: {
      BetterScroll,
      Goods,
      Parameter,
      Comment,
      Recommend
    },
    data() {
      return {
        goodsID: null,
        tab_item: ['商品','参数','评论','推荐'],
        isChoose: 0,
        clickY: [],

        // 商品数据
        GoodsData: {
          title: '', // 标题
          Price: '', // 新价格
          Promotion: '', // 旧价格
          banner: [], // 图片
        },
        // 详细参数
        Parameters: {
          content: '', // 详细
          img: [], // 图片
        },
        spec: [], // 规格参数

        show: false,
        sku: {
          tree: [
            {
              k: '颜色', // skuKeyName：规格类目名称
              k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [],
              largeImageMode: false, //  是否展示大图模式
            }
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [],
          price: '1.00', // 默认价格（单位元）
          hide_stock: true // 是否隐藏剩余库存
        },
        goods: {
          // 默认商品 sku 缩略图
          picture: ''
        },
      }
    },
    created() {
      // 获取商品ID
      this.goodsID = this.$route.params.id
      // 根据商品ID发送请求
      Detailed(this.goodsID).then((res) => {
        const {title, Price, Promotion, content, img, spec} = res.data[0]
        this.GoodsData.title = title // 商品名称
        this.GoodsData.Price = Price // 商品当前价格
        this.GoodsData.Promotion = Promotion // 商品之前价格
        this.GoodsData.banner = img // 商品轮播图
        this.Parameters.content = content // 商品参数
        this.Parameters.img = img // 商品图片内容
        this.spec = spec // 商品规格

        this.goods.picture = 'http://ee.tot7.cn/'+img[0]
        this.sku.price = Price

        for(let k in this.spec) {
          this.sku.tree[0].v.push({
            id: spec[k].id,
            name: spec[k].model,
            imgUrl: 'http://ee.tot7.cn/'+img[0],
            previewImgUrl: 'http://ee.tot7.cn/'+img[0]
          })
          this.sku.list.push({
            id: spec[k].id,
            s1: spec[k].id,
            s2: spec[k].id,
            price: spec[k].price*100,
            stock_num: 200,
          })
        }
      })
    },
    mounted() {
      setTimeout(() => {
        this.clickY = []
        this.clickY.push(0)
        this.clickY.push(this.$refs.parameter.$el.offsetTop)
        this.clickY.push(this.$refs.comment.$el.offsetTop)
        this.clickY.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.clickY)
      }, 500)
    },
    methods: {
      // 点击返回
      onClickLeft() {
        this.$router.go(-1)
      },
      // tab选中
      Choose(index) {
        this.isChoose = index
        this.$refs.scroll.scroll.scrollTo(0, -this.clickY[index], 200)
      },
      onClickIcon() {
        this.$toast('点击图标');
      },
      // 弹出商品规格
      onClickButton() {
        this.show = true
      },
      // 加入购物车
      onAddCartClicked() {
        const {selectedNum, selectedSkuComb} = this.$refs.sku.getSkuData()
        let user_id = window.sessionStorage.getItem('userid')
        let commodity_id = this.goodsID
        let spec_id = selectedSkuComb.id
        let countss = selectedNum
        // 判断用户是否登录
        if(user_id) {
          // 请求添加购物车
          AddCart({user_id, commodity_id, spec_id, countss}).then(res => {
            this.$toast.success(res.data[0].message)
            this.show = false
          })
        } else {
          this.$dialog.confirm({
            title: '是否登录',
            message: '请登录后再添加到购物车',
          }).then(() => {
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
          });
        }

      },
      // 立即购买
      onBuyClicked() {
        console.log('购买')
      },

      // 上拉加载更多数据
      pullingUp() {
        this.$refs.recommend.GetGoodsData()
        setTimeout(() => {
          this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp() // 允许再次刷新
        },500)
        this.$refs.scroll && this.$refs.scroll.scroll.refresh() // 重新计算可滚动区域
      },
      // 滚动位置
      ScrollPosition(position) {
        if(position.y >= -this.clickY[1]) {
          this.isChoose = 0
        }
        if(position.y <= -this.clickY[1] && position.y >= -this.clickY[2]) {
          this.isChoose = 1
        }
        if(position.y <= -this.clickY[2] && position.y >= -this.clickY[3]) {
          this.isChoose = 2
        }
        if(position.y <= -this.clickY[3]) {
          this.isChoose = 3
        }
      },
    }
  }
</script>

<style scoped lang="less">
.Detailed {
  height: 100%;
  background-color: #fff;
  z-index: 999;
  overflow: hidden;
  position: relative;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  .header-tab {
    position: fixed;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    box-shadow: 1px -18px 30px rgba(0,0,0,0.5);
    top: 46px;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 1;
    .tab-item {
      .choose {
        color: #e2110e;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .scroll {
    height: calc(100% - 86px - 50px);
    margin-top: 84px;
    margin-bottom: 50px;
  }
  /deep/ .van-goods-action .van-icon {
    color: #000;
  }
  .van-goods-action {
  }
}
</style>
