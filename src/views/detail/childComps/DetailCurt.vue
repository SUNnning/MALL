<template>
  <div :class="$style.bottomBar">
    <div :class="[$style.barItem,$style.barLeft]">
      <div>
        <i :class="[$style.icon, $style.service]"></i>
        <span :class="$style.text">客服</span>
      </div>

      <div>
        <i :class="[$style.icon, $style.shop]"></i>
        <span :class="$style.text">店铺</span>
      </div>

      <div>
        <i :class="[$style.icon, $style.select]"></i>
        <span :class="$style.text">收藏</span>
      </div>
    </div>

    <div :class="[$style.barItem, $style.barRight]">
      <div :class="$style.cart" @click="addToCart">加入购物车</div>
      <div :class="$style.buy">购买</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailCurt",
    methods: {
      addToCart() {
        console.log("hehehhehee")
        // this.$emit('addToCart')
      }
    }
	}
</script>

<style module>
.bottomBar {
  height: 58px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
.barItem {
  flex: 1;
  display: flex;
}
.barItem div {
  flex: 1;
}
.barLeft .text {
  font-size: 13px;
}
.barLeft .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.barLeft .service {
  background-position:0 -54px;
}
.barLeft .shop {
  background-position:0 -98px;
}
.barRight {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.barRight .cart {
  background-color: #ffe817;
  color: #333;
}
.barRight .buy {
  background-color: #f69;
}
</style>