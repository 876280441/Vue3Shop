<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "BetterScroll",
  props: {
    ScrollStart: {
      type: Number,
      default: 0
    },
    UpLoadBool: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      useTransition: false,
      click: true,
      probeType: this.ScrollStart, // 启动滚动监听
      pullUpLoad: this.UpLoadBool, // 开启上拉加载
    })

    // 实时监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('ScrollPosition', position);
    })

    // 上拉触发
    if(this.UpLoadBool) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
