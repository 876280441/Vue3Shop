<template>
  <div id="LogIn">
    <van-nav-bar
            title="用户登录"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <van-form @submit="onSubmit">
      <van-field
              v-model="user"
              name="user"
              label="用户名"
              placeholder="用户名"
              :rules="[{ pattern, message: '由中文、英文、数字组成的2-8位字符串' }]"
      />
      <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{required: true, message: '密码在5位以上' }]"
      />
      <div class="logon">
        <span>忘记密码?</span>
        <span>没有账号，去 <i @click="logon">注册</i></span>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import {LogIn} from "../../../api/user-login/UserLogin";

  export default {
    name: "LogIn",
    data() {
      return {
        user: '',
        password: '',
        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,8}$/
      };
    },
    methods: {
      // 点击返回
      onClickLeft() {
        this.$router.push('/profile')
      },
      onSubmit(values) {
        return new Promise((resolve) => {
          this.$toast.loading('验证中...');
          setTimeout(() => {
            this.$toast.clear();
            LogIn(values).then(res => {
              console.log(res)
              if(res.data.status == 0) {
                this.$toast.success(res.data.message);
                window.sessionStorage.setItem('token',res.data.useres[0].token)
                window.sessionStorage.setItem('username', res.data.useres[0].user)
                window.sessionStorage.setItem('userid', res.data.useres[0].id)
                this.$router.replace('/home')
              }
              if(res.data.status == 1) {
                this.$toast.fail(res.data.message);
              }
            })
          }, 1000);
        });
      },
      logon() {
        this.$router.push('/logon')
      }
    }
  }
</script>

<style scoped lang="less">
#LogIn {
  height: 100%;
  position: relative;
  z-index: 999;
  background-color: #ffffff;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  .van-form {
    margin-top: 90px;
    .logon {
      margin: 20px 15px;
      span {
        font-size: 14px;
        color: #666666;
      }
      span:nth-child(2) {
        float: right;
        i {
          font-style: normal;
          color: #000;
        }
      }
    }
  }
}
</style>
