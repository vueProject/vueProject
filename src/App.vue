<template>
  <div id="app">
    <!-- <router-link to="/hello"><img src="./assets/logo.png" /></router-link> -->
    <!-- <router-view class="header"></router-view> -->
    <router-view></router-view>
    <!-- <router-view class="footer" name="footer"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
// @import './style/common';
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
