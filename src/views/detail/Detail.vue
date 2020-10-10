<template>
  <div>
    {{$route.query.id}}
  </div>
</template>
<script>
export default {
  name: 'Detail',
  components:{},
  destroyed() {
    console.log("hhh")
  },
}
</script>
<style module>
  
</style>