<template lang="pug">
    div
        h2 {{ title }}
        list-item(
            v-for="(item, index) in content",
            v-bind:key="index",
            v-bind:title="item.title",
            v-bind:datetime="item.datetime",
            v-bind:textStr="item.textStr",
            v-bind:notes="item.notes",
            v-bind:canProceed="canProceed",
            v-on:proceed="$emit('proceed', index)",
            v-on:deleteEntry="deleteEntry(index)"
        )
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
            canProceed: {
                required: false,
                type: Boolean
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
    @import "../../less/base.less";
    @import "../../less/global-mixins.less";
    h2, div {
        float: left;
        box-sizing: border-box;
        width: @container-width / 3 - @gap-width * 2;
        margin: 0 @gap-width;
        padding: 10px 0 0 0;
        text-align: center;
    }
</style>