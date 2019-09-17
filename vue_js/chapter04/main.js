var app = new Vue({
    el: '#app',
    data: {
        width: 0,
        height: 0,
        budget: 300,
        limit: 2,
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'バナナ', price: 200 },
            { id: 3, name: 'いちご', price: 400 },
            { id: 4, name: 'オレンジ', price: 300 },
            { id: 5, name: 'メロン', price: 500 }
        ],
        order: false,
        watchedData: '',
        watchedData2: '',
        listValue: '',

        // フォーム監視
        list2: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ],

        list3: []
    },
    methods: {
        methodsData: function() {
            return Math.random();
        },
        changeList: function() {
            this.list[0].id = this.listValue;
        }
    },
    computed: {
        halfWidth: function() {
            return this.width / 2;
        },
        halfHeight: {
            get: function() {
                return this.height / 2;
            },
            set: function() {
                this.height =  this.height * 2;
            }
        },

        computedData: function() {
            return Math.random();
        },

        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        // sorted: function() {
        //     return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc') 
        // },
        limited: function() {
            // return this.sorted.slice(0, this.limit)
            return this.matched.slice(0, this.limit)
        }
    },
    watch: {
        'watchedData': function(newVal, oldValue) {
            alert("oldValue:" + oldValue + "\n" + "newVal:" + newVal)
        },

        list: {
            handler: function(newVal, oldValue) {
                alert("newList:" + newVal[0].id);
            },
            deep: true,
            immediate: false
        },

        // フォーム監視
        current: function(val) {
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response) {
                this.list2 = response.data.items
            }.bind(this))
        },

        list3: function() {
            // 更新後のul要素の高さを取得できない
            console.log('通常：', this.$refs.list.offsetHeight);
            // nextTickを使えばできる
            this.$nextTick(function() {
                console.log('nextTick:', this.$refs.list.offsetHeight);
            })
        }
    },

    filters: {
        // 小数点第2位に丸める
        round: function(val) {
            return Math.round(val * 100) * 100;
        },
        // ラジアンに変換する
        radian: function(val) {
            return val * Math.PI / 180;
        }
    },

    directives: {
        focus: {
            // 紐付いている要素がDOMに挿入されるとき
            inserted: function(el) {
                // 要素にフォーカスを当てる
                el.focus();
            }
        }
    },

    created: function() {
        this.$watch('watchedData2', function() {
            alert("変更されました。");
        }, {
            immediate: false
        })
    }
})
