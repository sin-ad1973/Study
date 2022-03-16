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
        setMessage(state, payload) {
            state.messageList = payload;
        }
    },
    actions: {
        /**
         * snabshot
         * @param {*} context 
         */
        subscribe(context) {
            const q = query(collection(db, 'messagelist'), orderBy('createdAt', 'desc'));
            onSnapshot(q, (querySnapshot) => {
                const resMessageList = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().message) {
                        resMessageList.push({
                            id: doc.id,
                            title: doc.data().title,
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
        sendPosts(context, { title, message }) {
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