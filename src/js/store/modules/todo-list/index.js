/**
 * Created by Administrator on 2017/4/11.
 */
import * as types from './mutation_types';
export default {
    state: {data: []},
    getters: {
        data: function(state) {
            return state.data;
        }
    },
    actions: {
        [types.ADD_NOTE]({ commit }, payloads) {
            if(payloads.toAddStr.trim() !== '') {
                commit(types.ADD_NOTE, payloads);
            }
        },
        [types.DELETE_NOTE]({ commit }, payloads) {
            commit(types.DELETE_NOTE, payloads);
        },
        [types.DELETE_ENTRY]({ commit }, payloads) {
            commit(types.DELETE_ENTRY, payloads);
        },
        [types.PROCEED]({ commit }, payloads) {
            commit(types.PROCEED, payloads);
        }
    }
    ,
    mutations: {
        [types.ADD_NOTE](state, { toAddStr, contentIndex, dataIndex }) {
            state.data[dataIndex].content[contentIndex].notes.push(toAddStr);
        },
        [types.DELETE_NOTE](state, { index, contentIndex, dataIndex }) {
            state.data[dataIndex].content[contentIndex].notes.splice(index, 1);
        },
        [types.DELETE_ENTRY](state, { contentIndex, dataIndex }) {
            state.data[dataIndex].content.splice(contentIndex, 1);
        },
        [types.PROCEED](state, { contentIndex, dataIndex }) {
            const movedItem = state.data[dataIndex].content.splice(contentIndex, 1);
            state.data[dataIndex + 1].content.push(...movedItem);
        }
    }
};