var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['りんご', 'みかん', 'いちご'],
        show: true,
        show2: true
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
})

console.log(app.message);