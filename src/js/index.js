/**
 * Created by Administrator on 2017/3/27.
 */
// dependency
import Vue from 'vue';

import store from './store/store.js';
// global less
import '../less/base.less';

// root vue
import todoListContainer from './components/todo-list/todo-list-container.vue';

new Vue({
    el: '#container',
    data: {
        data: {}
    },
    components: {
        todoListContainer
    },
    store
});