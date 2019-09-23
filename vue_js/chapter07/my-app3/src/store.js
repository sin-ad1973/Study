// VueとVuexのモジュールを読み込む
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '@/store/a.js'
import moduleB from '@/store/b.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 分割したモジュールを登録する
    modules: {
        moduleA,
        moduleB
    }
})
export default store