const moduleB = {
    state: {
        count: 1
    },
    namespaced: true,
    getters: {
        count(state) {
            return state.count
        }
    },
    mutations: {
        update(state) {
            state.count += 200
        }
    }
}
export default moduleB