<template>
  <div id="Address">
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

  import {AddUserAddress} from "../../../../api/profile/user-info";

  export default {
    name: "Address",
    data() {
      return {
        areaList,
        addRess: {
          user_id: null,
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
        const {name, tel, isDefault, province, city, county, addressDetail} = content
        this.addRess.user_id = window.sessionStorage.getItem('userid')
        this.addRess.name = name
        this.addRess.tel = tel
        this.addRess.isDefault = isDefault
        this.addRess.address = province+city+county+addressDetail
        // console.log(this.addRess)
        AddUserAddress(this.addRess).then(res => {
          console.log(res)
          this.$router.push('/putaddress')
        })
      },
    },
  }
</script>

<style scoped lang="less">
#Address {
  height: 100%;
  overflow: hidden;
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
