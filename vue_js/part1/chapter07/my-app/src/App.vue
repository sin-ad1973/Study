<template>
  <div id="app">
    <img src="./assets/logo.png" v-on:click="count">
    <p>count:{{ $store.state.count}}</P>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created () {
    // ストアの状態を取得
    console.log(this.$store.state.count)
    // ストアの状態を更新
    this.$store.commit('increment', 'created')
  },

  methods: {
    count() {
      // アクションを通じてコミット
      this.$store.dispatch('incrementAction', {"data": "test"})
      // 直接コミット
      // this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
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
