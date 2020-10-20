<template>
  <div v-if="Object.keys(product).length !== 0">
    <div :class="$style.infoTitle">{{product.title}}</div>
    <div :class="$style.infoPrice">
      <span :class="$style.nPrice">{{product.newPrice}}</span>
      <span :class="$style.oPrice">{{product.oldPrice}}</span>
      <span v-if="product.discount" :class="$style.discount">{{product.discount}}</span>
    </div>
    <div :class="$style.infoOther">
      <span>{{product.columns[0]}}</span>
      <span>{{product.columns[1]}}</span>
      <span>{{product.services[product.services.length-1].name}}</span>
    </div>
    <div :class="$style.infoService">
      <span :class="$style.infoServiceItem" v-for="index in product.services.length-1" :key="index">
        <img :src="product.services[index-1].icon">
        <span>{{product.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'DetailBadeInfo',
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>
<style module>
 .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .infoTitle {
    color: #222
  }

  .infoPrice {
    margin-top: 10px;
  }

  .infoPrice .nPrice {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .infoPrice .oPrice {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .infoPrice .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .infoOther {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .infoService {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .infoServiceItem img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .infoServiceItem span {
    font-size: 13px;
    color: #333;
  }
  
</style>
