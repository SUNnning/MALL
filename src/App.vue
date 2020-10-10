<template>
  <div>
    <router-view/>
    <TabBarContent></TabBarContent>
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
