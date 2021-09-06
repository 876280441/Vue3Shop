<template>
  <div id="Message">
    <van-nav-bar
        title="留言反馈"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="background-color: #39a9ed"
    />
    <div class="content">
      <van-field
          v-model="request"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="70"
          placeholder="请输入留言"
          show-word-limit
          style="border-bottom: 1px solid #ddd"
      />
      <van-checkbox v-model="checked" style="margin-top: 20px;position: relative;right: -80%;">匿名</van-checkbox>
      <van-button @click="OnSubmit()" type="primary" color="#39a9ed" style="margin: 20px auto;width: 80%;border-radius: 10px" block>提交</van-button>
    </div>
  </div>
</template>

<script>
import {GetUserMsg} from "../../../../api/home/message/message";

export default {
  name: "Message",
  data() {
    return {
      request: '',
      checked: false
    }
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 提交
    OnSubmit() {
      if(this.request === '') {
        return this.$toast.fail('留言信息不为空')
      }
      let user_id = window.sessionStorage.getItem('userid')
      let request = this.request
      GetUserMsg({user_id, request}).then(res => {
        this.$toast.success(res.data[0].message)
        this.$router.replace('/home')
      })
    }
  }
}
</script>

<style scoped lang="less">
#Message {
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 999;
  overflow: hidden;
}
/deep/ .van-nav-bar__title {
  color: white;
}
/deep/ .van-icon {
  color: white;
}
.content {
  margin-top: 80px;
}
</style>