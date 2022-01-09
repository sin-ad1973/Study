<template>
  <div id="app" class="clearFix">
    <header class="header">HEAVEN'S BASE</header>
    <Menu class="menu"/>
    <main>
      <router-view class="page"></router-view>
    </main>
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
  /* background-color: #0000ff; */
  color: #333;
  letter-spacing: 1px;
  font-weight: bold;
  border-bottom: 1px solid #999;
  background: url(./images/personal.jpeg);
  background-size: contain;
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
  border: #CCC 1px dashed;
  border-radius: 10px;
}
</style>
