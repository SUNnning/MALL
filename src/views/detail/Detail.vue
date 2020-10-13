<template>
  <div :id="$style.detail">
    <nav-bar>
      <div slot="left" :class="$style.back" @click="backTo">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <tab-control slot="center" 
                  :titles="titles"
                  :class="$style.nav">
      </tab-control>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../components/common/navBar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
export default {
  name: 'Detail',
  data(){
    return {
      titles: ['商家', '参数', '评价', '推荐']
    }
  },
  components:{
    NavBar,
    TabControl,
  },
  methods: {
    backTo(){
      this.$router.back()
    }
  }
}
</script>
<style module>
#detail{
  position: relative;
  z-index: 19;
  background-color: #fff;
  font-size: 13px;
}
.back{
  flex: 1;
  text-align: center;
  padding: 12px 0 0 0;
}
.nav{
  flex: 4;
  padding: 0 10px;
}
</style>