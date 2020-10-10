<template>
  <div :class="$style.tabControl">
    <div :class="[$style.tabControlItem, {[$style.active]: index===curIndex}]" 
        v-for="(item, index) in titles" :key="index"
        @click="itemClick(index)">
      <span class="">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  data(){
    return {
      curIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.curIndex = index;
      this.$emit('tabClick', index)
    }
  },
}
</script>
<style module>
  .tabControl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tabControlItem{
    flex: 1;
  }
  .active{
    color: blueviolet;
  }
  .active span{
    padding: 5px 10px;
    border-bottom: 1px solid blueviolet;
  }
</style>