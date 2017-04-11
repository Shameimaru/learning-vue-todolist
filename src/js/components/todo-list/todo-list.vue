<template lang="pug">
    div
        h2 {{ title }}
        list-item(
            v-for="(item, index) in content",
            :key="index",
            :dataIndex="dataIndex",
            :contentIndex="index",
            :title="item.title",
            :datetime="item.datetime",
            :textStr="item.textStr",
            :notes="item.notes"
        )

        div(class="addDiv" v-if="canAdd")
            div(class="addBtnDiv")
                button(class="addBtn") +
            div(class="newTag")
                div
                    label(for="title") 标题
                    input(id="title", type="text")
                div
                    label(for="date") 日期
                    input(id="date", type="date")
                div
                    label(for="desc") 描述
                    input(id="desc", type="text")
                button 添加
</template>

<script>
    import listItem from './list-item.vue'

    export default {
        components: {
            listItem: listItem
        },
        computed: {
            canAdd: function() {
                return this.dataIndex === 0;
            }
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
    .addBtnDiv {
        .addBtn {
            width: 100%;
            background-color: transparent;
            border: 1px solid black;
            border-radius: 20px;
            height: 30px;
        }
    }
    .addDiv {
        background-color: #ffffff;

    }

</style>