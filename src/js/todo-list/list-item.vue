<template lang="pug">
    div(class="list-item")
        div
            h2 {{ title }}
            p {{ datetime }}
            p {{ textStr }}
            div(class="note", v-for="(note, index) in notes")
                div {{note}}
                button(v-on:click="deleteNote(index);") x
        div
            input(type="text", v-model="toAddStr")
            button(v-on:click="addNote();") 添加
        div(v-show="canProceed")
            button(v-on:click="proceed()") ok
        div(class="delete")
            button(v-on:click="deleteEntry()") x
</template>

<script>
    export default {
        data: function () {
            return {
                toAddStr: ''
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
            canProceed: {
                required: false,
                type: Boolean
            }
        },
        methods: {
            deleteNote(index) {
                this.notes.splice(index, 1);
            },
            addNote() {
                if(this.toAddStr.trim() !== '') {
                    this.notes.push(this.toAddStr);
                    this.toAddStr = '';
                }
            },
            proceed() {
                this.$emit('proceed');
                this.toAddStr = '';
            },
            deleteEntry() {
                this.$emit('deleteEntry');
                this.toAddStr = '';
            }
        }
    }
</script>

<style lang="less" scoped="scoped">
    @import "../../less/global-mixins.less";

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