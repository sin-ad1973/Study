import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './firebase/config';
import { collection, addDoc, onSnapshot, query, serverTimestamp, orderBy } from 'firebase/firestore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messageList: [],
    },
    mutations: {
        updateMessageList(state, payload) {
            state.messageList = payload;
        }
    },
    actions: {
        /**
         * 監視
         * @param {*} context 
         */
        subscribeMessage(context) {
            // クエリ
            const q = query(collection(db, 'messagelist'), orderBy('createdAt', 'desc'));
            // 監視開始
            onSnapshot(q, (querySnapshot) => {
                const resMessageList = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().message) {
                        const data =doc.data();
                        console.log(data);
                        resMessageList.push({ id: doc.id, ...doc.data() });
                    }
                });
                context.commit('updateMessageList', resMessageList);
            });
        },
        /**
         * 登録
         * @param {*} context 
         * @param {*} message 
         */
        sendMessage(context, { title, message }) {
            addDoc(collection(db, 'messagelist'), {
                title,
                message,
                createdAt: serverTimestamp(),
            });
        }
    },
    modules: {
    },
})