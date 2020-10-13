<template>
  <div :class="$style.navbar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style module>
.navbar{
  display: flex;
}
</style>