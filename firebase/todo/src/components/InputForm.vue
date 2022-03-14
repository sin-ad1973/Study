<template>
  <div class="input-form">
    <input type="text" v-model="message">
    <button @click="sendMessage">送信</button>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      message: '',
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('sendPosts', this.message);
    }
  }
}
</script>

<style scoped>
.input-form {
  width: 100%;
  height: 25px;
  position: absolute;
  bottom: 10px;
}
input {
  width: calc(90% - 50px);
}
button {
  margin-left: 5px;
  width: 45px;
}
</style>
