<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
     show(message="闹呢？", duration=1000){
       this.message = message;
       this.isShow = true;

       setTimeout(()=>{
         this.isShow = false;
         this.message = '';
       }, duration)
     },
   }
}
</script>

<style>
.toast{
  color: #fff;
  font-size: 18px;
  padding: 8px 10px;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .7);
  border-radius: 2px;
  z-index: 999;
}
</style>