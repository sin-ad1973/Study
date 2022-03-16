<template>
  <div class="input-form">
    Title
    <input type="text" v-model="title">
    Message
    <textarea v-model="message"></textarea>
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      title: '',
      message: '',
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('sendPosts', { title: this.title, message: this.message });
    }
  }
}
</script>

<style scoped>
.input-form {
  width: 95%;
  height: 24%;
  text-align: left;
  position: absolute;
  left: 2.5%;
  right: 2.5%;
  bottom: 1%;
  color: #fff;
  box-sizing: border-box;
}
input {
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
}
textarea {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
}
button {
  width: 50px;
  height: 25px;
  background-color: #f00;
  border-radius: 3px;
  border: solid 1px #fff;
  color: #fff;
}
</style>
