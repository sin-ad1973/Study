<template>
  <div id="app">
    <chart-sample/>
  </div>
</template>

<script>
import ChartSample from './components/ChartSample.vue'

export default {
  name: 'app',
  components: {
    ChartSample
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
