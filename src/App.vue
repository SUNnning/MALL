<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar-content></tab-bar-content>
  </div>
</template>

<script>
import TabBarContent from './components/content/home/TabBarContent'

export default {
  name: 'App',
  components: {
    TabBarContent
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
