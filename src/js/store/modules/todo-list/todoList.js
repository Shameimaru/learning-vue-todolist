/**
 * Created by Administrator on 2017/4/11.
 */
import * as types from './mutationTypes';
import formatter from '../../../../lib/date-formatter';
import localdata from '../../mock/todolist';

const state = {data: []};

const getters = {
    data: function(state) {
        return state.data;
    }
};

const actions = {
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
    },
    [types.ADD_ENTRY]({ commit }, {title, date, desc}) {
        if(title !== '' && date !== '') {
            date = formatter(date);
            commit(types.ADD_ENTRY, {
                title,
                datetime: date,
                textStr: desc
            });
        }
    },
    [types.INIT_DATA]({ commit }) {
        commit(types.INIT_DATA);
    }
};

const mutations = {
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
    },
    [types.ADD_ENTRY](state, { title, datetime, textStr }) {
        state.data[0].content.push({
            title,
            datetime,
            textStr,
            notes: []
        });
    },
    [types.INIT_DATA](state) {
        state.data = localdata.data;
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};