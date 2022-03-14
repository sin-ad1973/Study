<template>
  <div class="message-item">
    <div class="message">
      {{ message.message }}
    </div>
    <div class="created-at">
      {{ message.createdAt.toDate() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
      message: Object,
  },
}
</script>

<style scoped>
.message-item {
  margin-bottom: 10px;
}
.created-at {
  color: #aaa;
  font-size: 8px;
  text-align: right;
}
.message {
  text-align: left;
  border-bottom: dashed 1px #ccc;
}
</style>
