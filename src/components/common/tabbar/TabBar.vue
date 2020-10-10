<template>
  <div :class="$style.wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style module>
.wrap{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .08);
  display: flex;
}

</style>