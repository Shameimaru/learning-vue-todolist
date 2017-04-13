<template lang="pug">
    div(class="list-item")
        div
            h2 {{ title }}
            p {{ datetime }}
            p {{ textStr }}
            div(class="note", v-for="(note, index) in notes")
                template
                    div {{note}}
                    button(@click="deleteNote({ index, contentIndex, dataIndex });") x
        div
            input(type="text", v-model="toAddStr")
            button(@click="addNote({ toAddStr, contentIndex, dataIndex })") 添加
        div(v-show="canProceed")
            button(@click="proceed({ contentIndex, dataIndex })") ok
        div(class="delete")
            button(@click="deleteEntry({ contentIndex, dataIndex })") x
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../../store/modules/todo-list/mutationTypes';

    export default {
        data: function () {
            return {
                toAddStr: ''
            }
        },
        computed: {
            canProceed: function() {
                return this.dataIndex !== 2;
            }
        },
        props: {
            title: {
                required: true,
                type: String
            },
            datetime: {
                required: true,
                type: String
            },
            textStr: {
                required: true,
                type: String
            },
            notes: {
                required: false,
                type: Array
            },
            contentIndex: {
                required: true,
                type: Number
            },
            dataIndex: {
                required: true,
                type: Number
            }
        },
        methods: {
            ...mapActions({
                deleteNote: types.DELETE_NOTE,
                deleteEntry: types.DELETE_ENTRY,
                proceed: types.PROCEED,
                addNote: types.ADD_NOTE
            })
        }
    }
</script>

<style lang="less" scoped="scoped">
    @import "../../../less/global-mixins.less";

    .list-item {
        border: 1px solid black;
        border-radius: 10px;
        background-color: #ffffff;
        margin-bottom: 10px;
        padding: 5px;
        position: relative;
        .round-form-input(24px);
    }
    p, div.note {
        margin: 0;
        padding: 5px 15px;
        border-bottom: 1px solid black;
        &:last-child {
            border: 0;
        }
    }
    div.note {
        position: relative;
        button {
            position: absolute;
            right: 0;
            top: 0;
            height: 14px;
            background-color: #dddddd;
            border: 0;
            width: 14px;
            padding: 0;
            font-size: 12px;
            cursor: pointer;
        }
    }
    div.delete button {
        &:extend(div.note button);
        top: 5px;
        right: 5px;
    }
</style>