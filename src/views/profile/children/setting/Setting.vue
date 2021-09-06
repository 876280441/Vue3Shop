<template>
  <div id="Setting">
    <van-nav-bar
            title="设置"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <div v-if="user_id" class="my-list">
      <van-cell @click="UpdatePass()" style="" is-link>
        <van-icon name="orders-o" style="font-size: 20px; padding-right: 5px;vertical-align: middle" />修改密码
      </van-cell>
      <van-cell @click="logout()" style="" is-link>
        <van-icon name="pending-payment" style="font-size: 20px; padding-right: 5px;vertical-align: middle" />退出登录
      </van-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Setting",
    data() {
      return {
        user_id: null
      }
    },
    created() {
      this.user_id = window.sessionStorage.getItem('userid')
    },
    methods: {
      // 点击返回
      onClickLeft() {
        this.$router.go(-1)
      },
      // 退出登录
      logout() {
        this.$dialog.confirm({
          title: '是否退出登录',
          message: '',
        }).then(() => {
          this.$toast.success('账户已退出');
          window.sessionStorage.clear()
          this.$router.replace('/profile')
        }).catch(() => {
          // on cancel
        });
      },
      // 修改密码
      UpdatePass() {
        this.$router.push('/update_pass')
      }
    }
  }
</script>

<style scoped lang="less">
  #Setting {
    position: relative;
    overflow: hidden;
    z-index: 999;
    height: 100%;
    background-color: #ffffff;
    /deep/ .van-nav-bar__title {
      color: white;
    }
    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-nav-bar__text {
      color: white;
    }
    .my-list {
      margin-top: 46px;
      .van-cell {
        height: 54px;
        padding: 14px 16px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        .van-icon {
          color: #000;
        }
      }
    }
  }
</style>
