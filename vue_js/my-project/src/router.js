import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import Page2_1 from './components/Page2_1.vue';
// import Page2_1_1 from './components/Page2_1_1.vue';
import Page2_2 from './components/Page2_2.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page1',
            component: Page1
        },
        {
            path: '/page2',
            component: Page2,
            children: [
                {
                    path: 'page2_1',
                    components: {
                        left: Page2_1,
                        right: Page2_2,
                    }
                    // children: [
                    //     {
                    //         path: 'page2_1_1',
                    //         component: Page2_1_1,
                    //     }
                    // ]
                },
                // {
                //     path: 'page2_2',
                //     components: {
                //         right: Page2_2,
                //     }
                // },
            ]
        }
    ]
})