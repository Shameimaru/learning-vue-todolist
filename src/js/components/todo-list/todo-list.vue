<template lang="pug">
    div(class="container")
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

        div(class="add-section" v-if="canAdd")
            div(class="add-btn-container")
                button(class="add-btn") +
            div(class="add-section-form")
                div
                    label(for="title") 标题：
                    input(id="title", type="text")
                div
                    label(for="date") 日期：
                    input(id="date", type="date")
                div
                    label(for="desc") 描述：
                    input(id="desc", type="text")
                div
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
    h2, div.container {
        float: left;
        box-sizing: border-box;
        width: @container-width / 3 - @gap-width * 2;
        margin: 0 @gap-width;
        padding: 10px 0 0 0;
        text-align: center;
    }
    .add-btn-container {
        margin: 0;
        .add-btn {
            width: 100%;
            background-color: transparent;
            border: 1px solid black;
            border-radius: 20px;
            height: 30px;
        }
    }
    .add-section {
        background-color: #ffffff;
        label {
            display: inline-block;
            width: 50px;
        }
        input {
            width: 200px;
        }
        .add-section-form>div {
            margin-top: 10px;
        }
    }

</style>