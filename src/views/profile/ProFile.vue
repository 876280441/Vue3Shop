<template>
  <div id="Profile">
    <van-nav-bar
        title="我的"
        :fixed="true"
        style="background-color: #39a9ed;"
    />
    <better-scroll class="scroll">
      <div class="my-box">
        <div class="my-content">
          <div class="avatar">
            <div class="image">
              <img v-if="avatar" :src="avatar" alt="">
              <img v-else src="../../assets/img/user.jpg" alt="">
            </div>
          </div>
          <div class="username" v-if="username" @click="UserInfo()">{{username}}</div>
          <div class="username" v-else @click="Login()">登录/注册</div>
        </div>
      </div>
      <div class="my-list">
        <van-cell @click="OrderForm()" style="" is-link>
          <van-icon name="orders-o" style="padding-right: 5px;vertical-align: middle" />我的订单
        </van-cell>
        <van-cell @click="PutAddress()" style="" is-link>
          <van-icon name="shop-o" style="padding-right: 5px;vertical-align: middle" />收货地址
        </van-cell>
        <van-cell style="" is-link>
          <van-icon name="pending-payment" style="padding-right: 5px;vertical-align: middle" />我的优惠卷
        </van-cell>
      </div>
      <div class="my-list" style="border-top: 10px solid #f1f1f1">
        <van-cell style="" is-link>
          <van-icon name="chat-o" style="padding-right: 5px;vertical-align: middle" />我的帮助
        </van-cell>
        <van-cell @click="Setting()" style="" is-link>
          <van-icon name="setting-o" style="padding-right: 5px;vertical-align: middle" />设置
        </van-cell>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

import {GetUserInfoData} from "../../api/profile/user-info";

export default {
  name: "ProFile",
  components: {
    BetterScroll
  },
  data() {
    return {
      username: null,
      userid: null,
      avatar: null
    }
  },
  created() {
    this.username = window.sessionStorage.getItem('username')
    this.userid = window.sessionStorage.getItem('userid')
    GetUserInfoData(this.userid).then(res => {
      this.avatar = 'http://ee.tot7.cn/'+ res.data[0].user_img
    })
  },
  methods: {
    // 我的订单
    OrderForm() {
      this.$router.push('/order_form')
    },
    // 收货地址
    PutAddress() {
      this.$router.push('/putaddress')
    },
    // 点击登录
    Login() {
      this.$router.push('/login')
    },
    // 查看用户信息
    UserInfo() {
      this.$router.push('/personal/'+this.userid)
    },
    // 设置
    Setting() {
      this.$router.push('/setting')
    }
  }
}
</script>

<style scoped lang="less">
#Profile {
  overflow: hidden;
  height: 100%;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  .scroll {
    margin-top: 46px;
    height: calc(100% - 46px - 50px);
    .my-box {
      width: 100%;
      height: 120px;
      margin-top: 46px;
      background-color: #fff;
      border-bottom: 10px solid #f1f1f1;
      .my-content {
        display: flex;
        width: 94%;
        height: 94%;
        background-color: #39a9ed;
        margin-left: 3%;
        margin-top: calc(3% + 46px);
        .avatar {
          width: 80px;
          height: 100%;
          .image {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 21px 5px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
        .username {
          flex: 1;
          height: 100%;
          line-height: 112px;
          padding-left: 10px;
          font-size: 18px;
          color: #fff;
        }
      }
    }
    .my-list {
      .van-cell {
        height: 54px;
        padding: 14px 16px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        .van-icon {

        }
      }
    }
  }
}
</style>
