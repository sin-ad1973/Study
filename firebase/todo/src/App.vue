<template>
  <div id="app">
    <div class="container">
      <div class="title">MessageBoard</div>
      <MessageContainer/>
      <InputForm/>
    </div>
  </div>
</template>

<script>
import MessageContainer from './components/MessageContainer.vue';
import InputForm from './components/InputForm.vue';

export default {
  name: 'App',
  components: {
    MessageContainer,
    InputForm,
  }
}
</script>

<style>
.title {
  color: #fff;
}
.container {
  width: 40%;
  height: 60%;
  border: solid 1px #ccc;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  top: 30%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -30%);
  box-sizing: border-box;
  text-align: center;
  box-shadow: 5px 5px 5px #ccc;
  background-color: #eb2727;
}
</style>
