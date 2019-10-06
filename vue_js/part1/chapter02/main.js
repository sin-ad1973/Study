var app = new Vue({
    el: '#app',
    data: {
        message: {
            value: 'Hello Vue.js!'
        },
        list: ['りんご', 'みかん', 'いちご'],
        num: 0,
        counter: 0,

        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',

        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'gray'
        },

        item: {
            id: 1,
            // src: 'item1.jpg',
            alt: '商品サムネイル',
            width: 200,
            height: 200
        },

        radius: 50,

        ok:true,
        type:"A",
        list: [
            { id: 1, name: "test1", hp: 100 },
            { id: 2, name: "test2", hp: 200 },
            { id: 3, name: "test3", hp: 300 }
        ],
        map: {
            key1: {
                name: "test1",
                hp: 100
            },
            key2: {
                name: "test2",
                hp: 200
            },
            key3: {
                name: "test3",
                hp: 300
            }
        },

        name: "",
        hp: "",
        text: "Vue",
        show: true
    },

    methods: {
        increment: function(event) {
            this.counter += 1;
        },
        addList: function() {

            if (this.name === "") {
                alert("test");
                return;
            }

            var max = this.list.reduce(function(a, b) {
                return a.id > b.id ? a.id : b.id;
            });

            this.list.push(
                {
                    id: max + 1,
                    name: this.name,
                    hp: this.hp
                }
            );
        },
        removeList: function(index) {
            this.list.splice(index, 1);
        },
        doAttack: function(index) {
            this.list[index].hp -= 10;
        },
        handleClick() {
            var count = this.$refs.count;
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1;
            }
        }
    },
    created: function() {
        // axios.get('./list.json').then(function(response) {
        //     this.list = response.data;
        // }.bind(this)).catch(function(e) {
        //     console.error(e);
        // })
        console.log("created");
    },
    mounted: function() {
        console.log("mounted");
        console.log("$el:");
        console.log(this.$el);
        console.log("$refs.count:");
        console.log(this.$refs.count);
    }
})

console.log(app.message.value);