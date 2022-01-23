import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        imageList: [
            require('@/images/echigo.jpeg'),
            require('@/images/echigo.jpeg'),
            require('@/images/echigo.jpeg'),
            require('@/images/wine1.jpeg'),
            require('@/images/kubota_senju.jpeg'),
            require('@/images/hakkaisan.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
            require('@/images/personal.jpeg'),
        ],
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    },
})