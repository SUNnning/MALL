<template>
  <nav-bar :class="$style.navbar">
    <div slot="center">天狗商城</div>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'HomeNavBar',
  components:{
    NavBar,
  }
}
</script>
<style module>
.navbar{
  background-color: rgb(231, 222, 240);
  color: rgb(136, 25, 247);
}
</style>