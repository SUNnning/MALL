<template>
  <nav-bar>
      <div slot="left" @click="backTo">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <tab-control slot="center" :titles="titles"></tab-control>
    </nav-bar>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商家', '参数', '评价', '推荐'],
    }
  },
  components:{
    NavBar,
    TabControl
  },
  methods: {
    backTo(){
      this.$router.back()
    },
  },
}
</script>
<style module>
  
</style>