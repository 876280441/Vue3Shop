<template>
  <div id="UpdatePassword">
    <van-nav-bar
            title="修改密码"
            left-arrow
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <van-form @submit="onSubmit">
      <van-field
              disabled
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
      />
      <van-field
              v-model="old_pass"
              type="password"
              name="old_pass"
              label="旧密码"
              placeholder="旧密码"
              :rules="[{ required: true, message: '请填写旧密码' }]"
      />
      <van-field
              v-model="new_pass"
              type="password"
              name="new_pass"
              label="新密码"
              placeholder="新密码"
              :rules="[{ required: true, message: '请填写新密码' }]"
      />
      <van-field
              v-model="news_pass"
              type="password"
              name="news_pass"
              label="确认密码"
              placeholder="确认密码"
              :rules="[{ validator, message: '两次密码不一致' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    name: "UpdatePassword",
    data() {
      return {
        userID: null,
        username: null,
        old_pass: '',
        new_pass: '',
        news_pass: ''
      };
    },
    created() {
      this.userID = window.sessionStorage.getItem('userID')
      this.username = window.sessionStorage.getItem('username')
    },
    methods: {
      // 点击返回
      onClickLeft() {
        this.$router.go(-1)
      },
      // 提交
      onSubmit(values) {
        console.log('submit', values);
      },
      // 验证
      validator(val) {
        return this.new_pass === val
      }
    }
  }
</script>

<style scoped lang="less">
#UpdatePassword {
  background-color: #ffffff;
  height: 100%;
  z-index: 999;
  position: relative;
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
  .van-form {
    margin-top: 80px;
  }
}
</style>
