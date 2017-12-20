<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <p>
        <router-link to="/FangBingBing">sss</router-link>
        <router-link to="/Hello">fff</router-link> 
    </p>
 -->    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // name: 'app'
}
</script>

<style lang="less">
@import './style/common';
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
