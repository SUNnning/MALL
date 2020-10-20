<template>
  <div class="curt">
    <nav-bar>
      <div slot="center">购物车({{myCurt}})</div>
      <div slot="right">{{this.$store.state.curtList.lenghth}}</div>
    </nav-bar>

    <cart-list :cartList="cartList"/>

  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import CartList from './childComps/CartList'

import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  data(){
    return {
      goodsList: []
    }
  },
  components: {
    NavBar,
    CartList,
  },
  computed: {
    ...mapGetters({
      myCurt: 'curtLength'
    })
  }
}
</script>

<style>
.center{
  width: 100vw;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}

</style>