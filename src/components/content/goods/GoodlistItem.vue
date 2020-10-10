<template>
  <div :class="$style.goodsItem">
    <img :src="goodsItem.show.img" alt="goodsImg">
    <div :class="$style.goodsInfo">
      <span>{{goodsItem.title}}</span>
      <p>{{goodsItem.orgPrice}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodlistItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  components:{}
}
</script>
<style module>
  .goodsItem {
    width: 48%;
    padding: 5px 2px;
    font-size: 14px;
  }
  .goodsItem img {
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