var app = new Vue({
    el: '#app',
    data: {
        show: false,
        message: "test",
        val1: false,
        val2: "no",
        val3: [],
        val4: 'b',
        val5: '',
        val6: [],
        preview: ''
    },
    methods: {
        handler: function(comment) {
            console.log(comment);
        },
        handleChange: function(event) {
            var file = event.target.files[0];
            if (file) {
                this.preview = window.URL.createObjectURL(file);
            }

        }
    }
})
