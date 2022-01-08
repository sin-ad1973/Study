<template>
  <div id="app" class="clearFix">
    <div class="header">HEAVEN'S BASE</div>
    <Menu class="menu"/>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0 10px;
  background-color: #0000ff;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: bold;
}
.clearFix::after {
  content: '';
  display: block;
  clear: both;
}
.menu {
  float: left;
  padding: 0px 5px 0px;
  width: 20%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;  
}
.page {
  float: right;
  width: 80%;
  height: 500px;
  box-sizing: border-box;
}
</style>
