<script>
export default {
    name: 'Sfcproj', // vue component name
    data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
    created: function () {
      console.log('access')
      var xhr = new XMLHttpRequest()
      xhr.open('GET', '/data/dummy.json', true)
      // xhr.open('GET', '../data/dummy.json', true)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(JSON.parse(xhr.responseText))
        }
      }
      xhr.send(null)
    }
}
</script>

<template>
    <div class="sfcproj">
        <p>The counter is set to <b>{{counter}}</b>.</p>
        <button @click="counter += 1">Click +1</button>
        <button @click="counter -= 1">Click -1</button>
        <button @click="counter = initCounter">Reset</button>
    </div>
</template>

<style scoped>
    .sfcproj {
        display: block;
        width: 400px;
        margin: 25px auto;
        border: 1px solid #ccc;
        background: #eaeaea;
        text-align: center;
        padding: 25px;
    }
    .sfcproj p {
        margin: 0 0 1em;
    }
</style>
