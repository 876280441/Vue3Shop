<template>
  <div id="Personal">
    <van-nav-bar
            title="修改个人信息"
            left-arrow
            right-text="保存"
            @click-right="onClickRight"
            :fixed="true"
            @click-left="onClickLeft"
            style="background-color: #39a9ed"
    />
    <div class="user_info">
      <div class="avatar">
        <div class="uploader-img">
          <van-uploader :after-read="afterRead">
            <van-button plain type="info">修改头像</van-button>
          </van-uploader>
        </div>
        <van-uploader v-model="fileList" multiple :deletable="false"/>
      </div>
      <div class="user-data">
        <van-field
            label="用户名"
            :placeholder="userData.user_name"
            disabled
        />

        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="userData.sex" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="0">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
            v-model="userData.autograph"
            rows="2"
            autosize
            label="个人简介"
            type="textarea"
            maxlength="50"
            placeholder="请输入"
            show-word-limit
        />
      </div>
    </div>

  </div>
</template>

<script>
  import {GetUserInfoData, UpdateUserInfoData} from "@/api/profile/user-info";

  export default {
    name: "Personal",
    data() {
      return {
        show: false,
        actions: [{ name: '查看头像' }, { name: '从相册中选取' }],
        fileList: [
          { url: '' },
        ],

        userData: {
          user_id: null,
          user_name: '',
          sex: '',
          autograph: '',
          base64: ''
        }
      }
    },
    created() {
      this.userData.user_id = this.$route.params.id
      this.GetUserInfoData()
    },
    methods: {
      // 获取数据
      GetUserInfoData() {
        GetUserInfoData(this.userData.user_id).then(res => {
          console.log(res)
          const {autograph,sex,user,user_id,user_img} = res.data[0]
          this.userData.sex = sex=='女'?'0':'1';
          this.userData.user_name = user
          this.fileList[0].url = 'http://ee.tot7.cn/'+user_img
          this.userData.autograph = autograph
          this.userData.user_id = user_id
        })
      },
      // 点击返回
      onClickLeft() {
        this.$router.go(-1)
      },
      // 图片数据
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        this.userData.base64 = file.content
        console.log(this.userData.base64)
      },
      // 点击提交
      onClickRight() {
        console.log(this.userData)
        UpdateUserInfoData(this.userData).then(res => {
          console.log(res)
          this.GetUserInfoData()
        })
        this.$toast('保存成功')
      }
    }
  }
</script>

<style scoped lang="less">
#Personal {
  height: 100vh;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  z-index: 999;
  /deep/ .van-nav-bar__title {
    color: white;
  }
  /deep/ .van-icon {
    color: white;
  }
  /deep/ .van-nav-bar__text {
    color: white;
  }
  .user_info {
    margin-top: 46px;
    .avatar {
      position: relative;
      height: 160px;
      box-sizing: border-box;
      /deep/ .van-uploader {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        .van-uploader__preview, .van-uploader__wrapper {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .van-uploader__preview-image {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          margin-top: -40px;
          margin-left: -40px;
          border-radius: 50%;
          border: 1px solid #eee;
        }
      }
      /deep/ .van-uploader__upload {
        display: none;
      }
      .uploader-img {
        position: absolute;
        width: 60px;
        height: 20px;
        left: 50%;
        margin-left: -30px;
        top: 68%;
        z-index: 99;
        .van-button {
          width: 60px;
          height: 20px;
          font-size: 10px;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
