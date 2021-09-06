<template>
  <div class="content">
    <div class="picture_list">
      <div class="picture_item" v-for="(item, index) in pictureData" :key="index">
        <img :src="item.img" alt="" @click="onChange(item.img)">
        <p>{{item.title}}</p>
      </div>
    </div>
    <van-image-preview v-model="show" :images="images"></van-image-preview>
  </div>
</template>

<script>
export default {
  name: "Picture_list",
  props: {
    pictureData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show: false,
      images: [],
    }
  },
  methods: {
    onChange(img) {
      this.show = true
      this.images = [img]
    },
  }
}
</script>

<style scoped lang="less">
.picture_item {
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 66px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: #fff;
    letter-spacing: 1px;
    background-color: rgba(0,0,0,.5);
  }
}
</style>
