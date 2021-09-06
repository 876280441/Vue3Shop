<template>
  <div class="OrderList">
    <div class="order-item">
      <div class="image"></div>
      <div class="content">
        <div class="goods-title">
          那啥立刻就打上来的12312321323
        </div>
        <div class="canshu">jkdhasjk</div>
      </div>
      <div class="price">
        <div class="prices">￥123.00</div>
        <div class="number">×4</div>
      </div>
    </div>

    <div class="order-item">
      <div class="image"></div>
      <div class="content">
        <div class="goods-title">
          那啥立刻就打上来的12312321323
        </div>
        <div class="canshu">jkdhasjk</div>
      </div>
      <div class="price">
        <div class="prices">￥123.00</div>
        <div class="number">×4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "OrderList"
}
</script>

<style scoped lang="less">
.OrderList {
  background-color: #ffffff;
}
.order-item {
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  .image {
    width: 80px;
    height: 80px;
    background-color: green;
  }
  .content {
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
    .goods-title {
      width: 170px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .canshu {
      margin-top: 20px;
      color: #666;
      font-size: 14px;
    }
  }
  .price {
    width: 80px;
    height: 100%;
    text-align: right;
    .prices {
      margin: 10px 0;
    }
    .number {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>