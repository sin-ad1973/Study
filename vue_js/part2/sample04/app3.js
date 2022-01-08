Vue.directive('fallback-image', {
    bind: function (el, binding) {
        console.log('bind', binding)
        // 修飾子
        var once = binding.modifiers.once
        el.addEventListener('error', function onError() {
            // 画像のロードに失敗したら実行される処理
            el.src = binding.value
            // once修飾子が指定されている場合はイベントリスナーを削除する
            if (once) {
                el.removeEventListener('error', onError)
            }
        })
    },
    update: function (el, binding) {
        console.log('update', binding)
        if (binding.oldValue !== binding.value && binding.oldValue === el.src) {
            el.src = binding.value
        }
    }
})

var vm = new Vue({
    el: '#app3',
    data: function () {
        return {
            altText: 'logo',
            noImageURL: 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
        }
    }
})