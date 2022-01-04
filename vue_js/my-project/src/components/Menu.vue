<template>
  <div class="hello">
    <h1 class='msg'>{{ msg2 }}</h1>
    <button @click="onClick">テスト</button><br>
    <button @click="toPage1">ページ1へ</button>
    <button @click="toPage2">ページ2へ</button>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data() {
    return {
      msg2: 'no click'
    };
  },
  methods: {
    onClick() {
      this.msg2 = 'test!!!'
    },
    toPage1() {
      this.$router.push('/Page1');
    },
    toPage2() {
      this.$router.push('/Page2');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
