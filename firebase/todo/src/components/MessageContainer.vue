<template>
  <div class="message-container">
    <ul class="listLayout">
      <li v-for="message in messageList" :key=message.id>
        <MessageItem :message=message />
      </li>
    </ul>
  </div>
</template>

<script>
import MessageItem from './MessageItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'MessageContainer',
  components: {
    MessageItem,
  },
  computed: {
    ...mapState({
      messageList: 'messageList',
    })
  },
  mounted() {
    // this.$store.dispatch('getPosts');
    this.$store.dispatch('subscribe');
  }
}
</script>

<style scoped>
.message-container {
    width: 95%;
    height: 70%;
    position: absolute;
    top: 5%;
    left: 2.5%;
    right: 2.5%;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    box-sizing: border-box;
    overflow: auto;
}
.listLayout {
    list-style: none;
    padding: 7px;
    margin: auto;
    box-sizing: border-box;
    width: 95%;
}
</style>
