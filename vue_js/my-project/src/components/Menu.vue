<template>
  <div class="menu">
    <!-- <h1 class='msg'>{{ msg2 }}</h1> -->
    <button @click="onClick">テスト</button>
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
.menu {
  float: left;
  background-color: #6cf3d4;
  padding: 5px 5px;
  width: 19%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0px 5px;
  border-radius: 5px;
}
button {
  background-color: #0de797;
  border: 0;
  /* border-width: 1px;
  border-radius: 3px; */
  color: #fff;
  margin: 1px;
  padding: 3px;
  transition: 0.3s;
}
button:hover {
  background-color: rgb(255, 123, 0);
  color: #fff;
  /* transform: rotate(360deg); */
}
</style>
