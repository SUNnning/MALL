<template>
  <tab-bar>
        <tab-bar-item path="/home" activeColor="pink">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="首页">
        </template>  
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="当前首页">
        </template> 
        <template v-slot:item-text>首页</template>  
      </tab-bar-item>
      
      <tab-bar-item path="/category" activeColor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="分类">
        </template>  
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="当前分类">
        </template> 
        <template v-slot:item-text>分类</template>  
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="购物车">
        </template>  
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="当前购物车">
        </template> 
        <template v-slot:item-text>购物车</template>  
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="我的">
        </template>  
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="当前我的">
        </template> 
        <template v-slot:item-text>我的</template>  
      </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'TabBarContent',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>