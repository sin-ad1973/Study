// コンポーネントをグローバルに登録
Vue.component('my-component', {
    // テンプレート
    template: '<p>{{ message }}</p>',
    // データはオブジェクトを返す関数にする
    data: function() {
        return {
            message: 'Hello Vue.js'
        }
    },
    methods: {
        // メソッドや算出プロパティ、ウォッチャなどの定義方法は
        // ルートコンストラクタのオプションと同じ  
    }
})

Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    // propsに型指定
    props: {
        name: String,
        hp: Number
    }
})

Vue.component('comp-child2', {
    template: '<li>{{ name }} HP.{{ hp }} <button v-on:click="doAttack">攻撃する</button></li>',
    props: {
        id: Number,
        name: String,
        hp: Number
    },
    methods: {
        // テンプレートのbuttonクリックイベントのハンドラから
        // $emitでattackイベントを発火する
        doAttack: function() {
            // 引数として自分のIDを親に渡す
            this.$emit('attack', this.id)
        }
    }
})

Vue.component('comp-child3', {
    template: `<div class="comp-child">
                    ここにスロットを埋め込む→<slot>何もなし</slot>
               </div>`
})

Vue.component('comp-child4', {
    template: `<div class="comp-child-slot">
                    <slot name="slot1">デフォルト1</slot>
                    <slot name="slot2">デフォルト2</slot>
                    <slot>デフォルト3</slot>
               </div>`
})

Vue.component('comp-child5', {
    template: `<div class="comp-child">
                    <slot attr="Hello"></slot>
               </div>`
})

// ローカル登録用コンポーネント
var myComponent2 = {
    template: '<p>MyComponent2</p>'
}

// ルート
var app = new Vue({
    el: '#app',

    // ローカルコンポーネント登録
    components: {
        'my-component2': myComponent2
    },

    data: {
        message: 'テスト',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },

    methods: {

        // 子コンポーネントでattackイベント発生
        handleAttack: function(id) {
            // 引数のIDから要素を検索
            var item = this.list.find(function(el) {
                return el.id === id
            })

            // hpが0より大きければ10減らす
            if (item != undefined && item.hp > 0) item.hp -= 10
        }

    }
})
