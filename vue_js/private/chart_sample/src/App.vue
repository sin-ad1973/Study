<template>
  <div id="app">
    <ChartBarSample/>
  </div>
</template>

<script>
import ChartBarSample from './components/ChartBarSample.vue'

export default {
  name: 'app',
  components: {
    ChartBarSample
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
