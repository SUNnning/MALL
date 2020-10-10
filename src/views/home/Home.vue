<template>
  <div :id="$style.home">
    <ul>
      <li>woshitou</li>
      <li>woshitou</li>
      <li>woshitou</li>
    </ul>
    <Scroll :class="$style.content" ref="scroll" 
            :probeType="3"
            :pullUpLoad="true"
            @scroll="contentScroll"
            @pullUpdate="loadMore">
      <tab-conrol :titles="['流行', '推荐', '精选']" 
                :class="$style.tabControl"
                @tabClick="tabClick"/>
      <Goodlist :goods="showType"/>
    </Scroll> 
    <BackTop @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
import TabConrol from '../../components/content/tabControl/TabControl'
import Goodlist from '../../components/content/goods/Goodlist'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

import {getHomeGoods} from '../../network/home.js'
export default {
  name: 'Home',
  data(){
    return {
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShow: false
    }
  },
  components: {
    TabConrol,
    Goodlist,
    Scroll,
    BackTop
  },
  methods: {
    /**
     * 网络请求相关
     */
    // 封装一层，created中只写逻辑
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1
      })
    },

     /**
     * 事件监听相关
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      
    },
    backTop(){
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position){
      this.isShow = (-position.y) > 1000;
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp()
    }
  },
  computed: {
    showType(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  }
}
</script>

<style module>
#home{
  height: 100vh;
  position: relative;
}
.tabControl{
  position: sticky;
  top: 0;
  background-color: #fff;
}
.content{
  /* height: calc(100% - 49px); */
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>