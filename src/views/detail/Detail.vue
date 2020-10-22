<template>
  <div :id="$style.detail">
    <detail-nav-bar :class="$style.nav"/>
    <scroll :class="$style.content"
            :probeType="3"
            :pullUpLoad="true">
      <detail-swiper :banners="banners"/>
      <detail-base-info :product="product"/>
      <detail-shop-info :shop="shop"/>
      <detail-product-info :detailInfo="detailInfo"/>
      <detail-param-info :paramInfo="paramInfo"/>
    </scroll>
    <detail-curt @addToCart="addToCart"/>
  </div>
</template>
<script>
import Scroll from '../../components/common/scroll/Scroll'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailProductInfo from './childComps/DetailProductInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCurt from './childComps/DetailCurt'

import { getDetailData, Goods, Shop, GoodsParam } from '../../network/detail'

export default {
  name: 'Detail',
  data(){
    return {
      id: null,
      product: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      recommends: {},
      banners: []
    }
  },
  components:{
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailProductInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailCurt
  },
  methods: {
    addToCart(){
      this.$store.commit('addToCurt', this.product)
    }
  },
  created() {
    this.id = this.$route.query.id;
    getDetailData(this.id).then(res => {
      console.log(res)
      let data = res.result;
      
      this.banners = data.itemInfo.topImages;

      this.product = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
    })
  },
}
</script>
<style module>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  font-size: 13px;
  height: 100vh;
}
.nav{
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content{
  /* height: calc(100vh - 102px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 58px;
  overflow: hidden;
}
</style>