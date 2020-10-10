<template>
  <div :class="$style.goodslist">
    <GoodlistItem v-for="(item, index) in goods" :key="index" 
                  :goodsItem="item"/>
  </div>
</template>
<script>
import GoodlistItem from './GoodlistItem'

export default {
  name: 'Goodlist',
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodlistItem
  }
}
</script>
<style module>
   .goodslist{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
   }
</style>