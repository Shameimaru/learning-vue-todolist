<template lang="pug">
    div
        h2 {{ title }}
        list-item(
            v-for="(item, index) in content",
            v-bind:key="index",
            v-bind:dataIndex="dataIndex",
            v-bind:contentIndex="index",
            v-bind:title="item.title",
            v-bind:datetime="item.datetime",
            v-bind:textStr="item.textStr",
            v-bind:notes="item.notes",
            v-on:proceed="$emit('proceed', index)",
            v-on:deleteEntry="deleteEntry(index)"
        )
        div(class="addDiv")
            button(class="addBtn") +
            input(type="text")
            button 添加
</template>

<script>
    import listItem from './list-item.vue'

    export default {
        components: {
            listItem: listItem
        },
        props: {
            title: {
                required: true,
                type: String
            },
            content: {
                required: false,
                type: Array
            },
            dataIndex: {
                required: true,
                type: Number
            }

        },
        methods: {
            deleteEntry(index) {
                this.content.splice(index, 1);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../less/base.less";
    @import "../../../less/global-mixins.less";
    h2, div {
        float: left;
        box-sizing: border-box;
        width: @container-width / 3 - @gap-width * 2;
        margin: 0 @gap-width;
        padding: 10px 0 0 0;
        text-align: center;
    }
    .addDiv {
        .round-form-input(24px);
        .addBtn {
            width: 100%;
            margin-left: 15px;
            background-color: transparent;
            border: 1px solid black;
            border-radius: 20px;
            height: 30px;
        }
    }

</style>