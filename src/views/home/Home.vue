<template>
  <div :id="$style.home">
    <tab-control :titles="['流行', '推荐', '精选']" 
                @tabClick="tabClick"
                v-show="showTabCrl"
                :class="$style.hideBar"
                ref="tabControl1"/>

    <scroll :class="$style.content" 
            ref="scroll" 
            :probeType="3"
            :pullUpLoad="true"
            @scroll="contentScroll"
            @pullUpdate="loadMore">
      <home-nav-bar/>
      <home-swiper :banners="banner" @swiperImageLoad="imgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '推荐', '精选']" 
                @tabClick="tabClick"
                ref="tabControl2"/>
      <goodlist :goods="showType"/>

    </scroll> 

    <back-top @click.native="backTop" v-show="showBack"/>
  </div>
</template>

<script>

import TabControl from 'components/content/tabControl/TabControl'
import Goodlist from 'components/content/goods/Goodlist'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import HomeNavBar from './childComps/HomeNavBar'
import FeatureView from './childComps/FeatureView'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidata, getHomeGoods} from '../../network/home'
import {debounce} from '../../common/util.js'

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
      offSetTop: null,
      showTabCrl: false,
      showBack: false,
      recommends:[],
      banner: [],
      backY: null
    }
  },
  components: {
    TabControl,
    Goodlist,
    Scroll,
    HomeNavBar,
    BackTop,
    FeatureView,
    HomeSwiper,
    RecommendView
  },
  methods: {
    /**
     * 网络请求相关
     */
    // 封装一层，created中只写逻辑
    // 封装请求数据方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        const data = res.data;
        this.banner = data.banner.list
        this.recommends = data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      })
    },
     /**
     * 事件监听相关
     */
    // 准确获取tabbar位置
    imgLoad(){
      this.offSetTop = this.$refs.tabControl2.$el.offsetTop;
    },
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
      // 实现tabcrotrol吸顶 并不两个tab的选中项
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    // 返回顶部
    backTop(){
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 显示返回顶部按钮
    contentScroll(position){
      this.showTabCrl = (-position.y) > this.offSetTop
      this.showBack = (-position.y) > 1000;
      console.log(this.$refs.scroll.scroll)
      console.log(position.y)
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp()
    }, 
  },
  computed: {
    // 显示tab选中项商品列表
    showType(){
      return this.goods[this.currentType].list
    },
  },
  created(){
    // 请求banner数据
    this.getHomeMultidata();
    // 请求分类数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 监听gooditemimg加载完成 刷新scroll
    // 防抖
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on("productImgLoad", ()=>{
      refresh()
    })
  },
  activated() {
    if(!this.backY){
      console.log(this.backY)
      this.$refs.scroll.scrollTo(0, this.backY, 0);
    }
  },
  deactivated() {
    console.log(this.$refs.scroll.scroll)
    this.backY = this.$refs.scroll.scroll.y
  }
}
</script>

<style module>
#home{
  height: 100vh;
  position: relative;
}

/* 使用bs后 position sticky失效 */
/* .tabControl{
  position: sticky;
  top: 0;
  background-color: #fff;
} */

.content{
  /* height: calc(100% - 49px); */
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
}
.hideBar{
  position: relative;
  background-color: #fff;
  z-index: 1;
}
</style>