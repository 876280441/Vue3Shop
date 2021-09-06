<template>
  <div id="PutAddress">
    <van-nav-bar
            title="收货地址"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <better-scroll v-if="user_id" class="scroll">
      <van-address-list
              v-model="chosenAddressId"
              :list="list"
              :disabled-list="disabledList"
              default-tag-text="默认"
              @add="onAdd"
              @edit="onEdit"
      />
    </better-scroll>
    <van-empty v-else @click.native="login()" image="error" description="请登录" />
  </div>
</template>

<script>
import BetterScroll from "../../../../components/common/better-scroll/BetterScroll";

import {GetAddress} from "../../../../api/profile/user-info";

export default {
  name: "PutAddress",
  components: {
    BetterScroll
  },
  data() {
    return {
      user_id: null,
      chosenAddressId: '',
      list: [],
      disabledList: [

      ],
    }
  },
  created() {
    this.user_id = window.sessionStorage.getItem('userid')
    GetAddress(this.user_id).then(res => {
      this.list.push(...res.data)
      this.isFlag()
    })
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 未登录
    login() {
      this.$router.push('/login')
    },
    // 新增
    onAdd() {
      this.$router.push('/address')
    },
    // 修改
    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    },
    // 查找是否选中的
    isFlag() {
      for(let k in this.list) {
        if(this.list[k].isDefault == true) {
          this.chosenAddressId = this.list[k].id
          break;
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#PutAddress {
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 999;
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
  .yes_user {
    width: 100%;
  }
  .scroll {
    margin-top: 46px;
    overflow: hidden;
    height: calc(100% - 46px);
    /deep/ .van-radio .van-icon {
      color: #ffffff;
    }
    /deep/ .van-icon {
      color: #000000;
    }
  }
  .van-address-list__bottom {
    margin: 30px 0;
    position: static;
  }
}
</style>
