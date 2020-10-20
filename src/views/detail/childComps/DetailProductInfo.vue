<template>
  <div v-if="Object.keys(detailInfo).length !== 0" :class="$style.goodsInfo">
    <div :class="[$style.infoDesc, $style.clearFix]">
      <div :class="$style.start"></div>
      <div :class="$style.desc">{{detailInfo.desc}}</div>
      <div :class="$style.end"></div>
    </div>

    <div :class="$style.infoKey">
      {{detailInfo.detailImage[0].key}}
    </div>

    <div :class="$style.infoList">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
                  :key="index" :src="item" 
                  @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProductInfo',
  props: {
    detailInfo:{}
  },
  methods: {
    imgLoad(){
      console.log("hehe");
    }
  },
}
</script>

<style module>
.goodsInfo {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .infoDesc {
    padding: 0 15px;
  }

  .infoDesc .start, .infoDesc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .infoDesc .start {
    float: left;
  }

  .infoDesc .end {
    float: right;
  }

  .infoDesc .start::before, .infoDesc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .infoDesc .end::after {
    right: 0;
  }

  .infoDesc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .infoKey {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .infoList img {
    width: 100%;
  }
</style>