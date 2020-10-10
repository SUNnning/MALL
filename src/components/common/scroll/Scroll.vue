<template>
  <div :class="$style.wrapper" ref="wrapper">
    <div :class="$style.content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh();
      console.log("refresh")
    }
  },
  mounted() {
    let wrapper = this.$refs.wrapper;
    this.scroll = new BScroll(wrapper,{
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on('scroll',(positon)=>{
      this.$emit('scroll', positon)
    });
    this.scroll.on('pullingUp', ()=>{
      this.$emit('pullUpdate')
    })
  },
}
</script>
<style module>
  /* .wrapper{

  } */
</style>