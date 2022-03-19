<template>
  <div class="message-item">
    <div class="header clearfix">
      <span class="title">◇{{ message.title }}</span>
      <span class="created-at">[{{ this.displayDate }}]</span>
    </div>
    <div class="message">
      {{ message.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
      message: Object,
  },
  computed: {
    displayDate() {
      if (!this.message.createdAt) {
        return '';
      }
      const date = this.message.createdAt.toDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
    }
  }
}
</script>

<style scoped>
.message-item {
  margin-bottom: 12px;
}
.header {
  border-bottom: dashed 1px #ccc;
}
.title {
  color: #000;
  font-size: 12px;
  float: left;
  vertical-align: bottom;
}
.created-at {
  color: #aaa;
  font-size: 12px;
  float: right;
  vertical-align: bottom;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
.message {
  text-align: left;
  font-size: 14px;
}
</style>
