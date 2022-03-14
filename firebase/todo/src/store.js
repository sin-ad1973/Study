import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './firebase/config';
import { collection, getDocs, addDoc, onSnapshot, query, serverTimestamp, orderBy } from 'firebase/firestore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messageList: [],
    },
    mutations: {
        setMessage(state, payload) {
            state.messageList = payload;
        }
    },
    actions: {
        /**
         * get(未使用)
         * @param {*} context 
         */
        async getPosts(context) {
            const res = await getDocs(collection(db, 'messagelist'));
            const resMessageList = [];
            res.forEach((doc) => {
                resMessageList.push({
                    id: doc.id,
                    message: doc.data().message,
                    createdAt: doc.data().createdAt
                });
            })
            context.commit('setMessage', resMessageList);
        },
        /**
         * snabshot
         * @param {*} context 
         */
        async subscribe(context) {
            const q = query(collection(db, 'messagelist'), orderBy('createdAt', 'desc'));
            onSnapshot(q, (querySnapshot) => {
                const resMessageList = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().message) {
                        resMessageList.push({
                            id: doc.id,
                            message: doc.data().message,
                            createdAt: doc.data().createdAt
                        });
                    }
                });
                context.commit('setMessage', resMessageList);
            });
        },
        /**
         * send
         * @param {*} context 
         * @param {*} message 
         */
        async sendPosts(context, message) {
            await addDoc(collection(db, 'messagelist'), {
                message,
                createdAt: serverTimestamp(),
            });
        }
    },
    modules: {
    },
})