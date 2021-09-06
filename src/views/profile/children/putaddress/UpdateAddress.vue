<template>
  <div id="UpdateAddress">
    <van-nav-bar
        title="新增收货地址"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <van-address-edit
        :area-list="areaList"
        :show-postal="false"
        :show-delete="false"
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
    />
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
export default {
  name: "UpdateAddress",
  data() {
    return {
      areaList,
      addRess: {
        name: '',
        tel: '',
        isDefault: false,
        address: ''
      }
    };
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    onSave(content) {
      console.log(content);

    },
  },
}
</script>

<style scoped lang="less">
#UpdateAddress {
  height: 100%;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  /deep/ .van-nav-bar__text {
    color: white;
  }
  .van-address-edit {
    margin-top: 46px;
  }
}
</style>