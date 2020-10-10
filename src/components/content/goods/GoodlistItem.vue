<template>
  <div :class="$style.product" @click="showDetail">
    <img :src="product.show.img" alt="goodsImg" @load="imgLoad">
    <div :class="$style.goodsInfo">
      <span>{{product.title}}</span>
      <p>{{product.orgPrice}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodlistItem',
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  components:{},
  methods: {
    imgLoad(){
      this.$bus.$emit("productImgLoad")
    },
    showDetail(){
      // path: '/detail/:id',路由如此配 是动态参数
      // this.$router.push('/detail/' + this.product.iid);
      // 路由正常配
      this.$router.push({
        path: '/detail',
        query: {
          id: this.product.iid
        }
      })
    }
  },
}
</script>
<style module>
  .product {
    width: 48%;
    padding: 5px 2px;
    font-size: 14px;
  }
  .product img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsInfo {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
</style>