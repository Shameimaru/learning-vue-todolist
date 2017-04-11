/**
 * Created by Administrator on 2017/4/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import todoList from './modules/todo-list/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todoList
    }
});