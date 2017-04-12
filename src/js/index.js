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

const local_data = [
    {
        title: '即将要做',
        content: [
            {
                title: '扫地',
                datetime: '2016年10月1日',
                textStr: '扫地描述',
                notes: [
                    '先这样做',
                    '再这样做'
                ]
            }, {
                title: '喝茶',
                datetime: '2016年10月2日',
                textStr: '扫地描述',
                notes: [
                    '先喝这个',
                    '再喝这个'
                ]
            }, {
                title: '参拜',
                datetime: '2016年10月1日',
                textStr: '参拜描述',
                notes: [
                    '先',
                    '后'
                ]
            }
        ]
    },
    {
        title: '正在进行',
        content: [{
            title: '做饭',
            datetime: '2016年10月1日',
            textStr: '总体描述',
            notes: [
                '先',
                '后'
            ]
        }]
    },
    {
        title: '已经完成',
        content: [{
            title: '睡觉',
            datetime: '2016年10月1日',
            textStr: '睡觉描述',
            notes: [
                '先',
                '后'
            ]
        }]
    }
];



new Vue({
    el: '#container',
    data: {
        data: {}
    },
    components: {
        todoListContainer
    },
    store,
    created() {
        this.$store.state.todoList.data = local_data;
    }
});