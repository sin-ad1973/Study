<template>
  <div id="app" class="clearFix">
    <header class="header">HEAVEN'S BASE</header>
    <Menu />
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
  margin-top: 70px;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0 10px;
  color: #333;
  letter-spacing: 1px;
  font-weight: bold;
  background-size: contain;
}
.clearFix::after {
  content: '';
  display: block;
  clear: both;
}
.page {
  position: relative;
  float: right;
  width: 79%;
  box-sizing: border-box;
  border: #CCC 1px dashed;
  border-radius: 10px;
}
</style>
