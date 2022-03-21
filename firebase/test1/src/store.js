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
         * 更新監視
         * @param {*} context 
         */
        subscribeMessage(context) {
            // コレクションへの参照取得
            const collRef = collection(db, 'messagelist');
            // クエリ生成
            const q = query(collRef, orderBy('createdAt', 'desc'));
            // 監視を開始
            onSnapshot(q, (querySnapshot) => {
                const resMessageList = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().message) {
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
            // コレクションへの参照取得
            const collRef = collection(db, 'messagelist');
            // 登録
            addDoc(collRef, {
                title,
                message,
                createdAt: serverTimestamp(),
            });
        }
    },
    modules: {
    },
})