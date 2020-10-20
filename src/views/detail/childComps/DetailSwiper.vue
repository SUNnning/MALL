<template>
  <div :class="$style.content">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="">
      </swiper-item> 
  </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: 'DetailSwiper',
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style module>
.content img{
  height: 450px;
  border-radius: 2px;
}
</style>