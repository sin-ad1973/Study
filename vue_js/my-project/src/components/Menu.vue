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
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
button {
  background-color: #fff;
  border: 1;
  border-width: 1px;
  /* border-color: #ccc; */
  /* border-bottom-color: #ccc; */
  border-radius: 3px;
  margin: 1px;
  padding: 3px;
  /* min-width: 150px; */
}
</style>
