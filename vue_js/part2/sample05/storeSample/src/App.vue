<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done"
         v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
        -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>

    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>

    <h2>ラベル一覧</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="checkbox" v-bind:value="label.id"
          v-model="newTaskLabelIds">
          {{ label.text }}
      </li>
    </ul>

    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="新しいラベル">
    </form>

    <h2>ラベルでフィルタリング</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="radio" v-bind:checked="label.id === filter"
          v-on:change="changeFilter(label.id)">
          {{ label.text }}
      </li>
      <li>
        <input type="radio" v-bind:checked="filter === null"
          v-on:change="changeFilter(null)">
          フィルタしない
      </li>
    </ul>

    <h2>保存と復元</h2>
    <button type="button" v-on:click="save">保存</button>
    <button type="button" v-on:click="restore">復元</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: function () {
    return {
      // 入力中の新しいタスク名
      newTaskName: '',
      // 新しいタスクに紐付くラベル一覧
      newTaskLabelIds: [],
      // 入力中の新しいラベル名
      newLabelText: ''
    }
  },

  computed: {
    tasks () {
      return this.$store.getters.filteredTasks
    },
    labels () {
      return this.$store.state.labels
    },
    filter () {
      return this.$store.state.filter
    }
  },

  methods: {

    // タスクを追加する
    addTask () {
      // 'addTask'ミューテーションをコミットする
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds
      })
      this.newTaskName = ''
    },

    // タスクの完了状態を更新する
    toggleTaskStatus (task) {
      // 'toggleTaskStatus'ミューテーションをコミットする
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },

    // ラベルを追加する
    addLabel () {
      // 'addLabel'ミューテーションをコミットする
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })
    },

    // ラベルIDからラベルのテキストを返す
    getLabelText (id) {
      const label = this.labels.filter(label => label.id === id)[0]
      return label ? label.text : ''
    },

    // フィルタする対象のラベルを変更する
    changeFilter (labelId) {
      // 'changeFilter'ミューテーションをコミットする
      this.$store.commit('changeFilter', {
        filter: labelId
      })
    },

    // 現在の状態を保存する
    save () {
      this.$store.dispatch('save')
    },

    // 保存されている状態を復元する
    restore () {
      this.$store.dispatch('restore')
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
