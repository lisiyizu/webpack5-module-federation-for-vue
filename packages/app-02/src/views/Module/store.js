// 模块化 store
export default {
    'abd': {
        namespaced: true,
        state: {
            num: 0
        },
        getters: {
            abdStoreNum: state => state.num,
        },
        mutations: {
            ADD (state) {
                state.num += 1;
            },
            REDUCE (state) {
                state.num -= 1;
            }
        },
        actions: {
            add ({ commit }) {
                commit('ADD');
            },
            reduce ({ commit }) {
                commit('REDUCE');
            }
        }
    }
}