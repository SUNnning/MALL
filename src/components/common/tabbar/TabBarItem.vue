<template>
  <div :class="$style.tabbaritem" @click="rtlink">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{[$style.active]: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    rtlink(){
      // console.log(this.$route)
      this.$router.push(this.path);
    }
  }
}
</script>

<style module>
.tabbaritem{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  background-color: blueviolet;
}
.tabbaritem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>