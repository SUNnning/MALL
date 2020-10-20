<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar-content v-show="isShow"></tab-bar-content>
  </div>
</template>

<script>
import TabBarContent from './components/content/home/TabBarContent'

export default {
  name: 'App',
  data(){
    return {
      isShow: true
    }
  },
  components: {
    TabBarContent
  },

  // 控制tarbar的显隐
  watch: {
    $route(to){
      if(to.path.indexOf("/detail") >= 0){
        this.isShow = false
      }else{
        this.isShow = true
      }
    }
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
