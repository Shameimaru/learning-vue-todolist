<template lang="pug">
    div(class="list-container")
        todo-list(
            v-for="(value, index) in data",
            v-bind:key="index",
            v-bind:title="value.title",
            v-bind:content="value.content"
            v-bind:canProceed="index !== data.length - 1"
            v-on:proceed="function(entryIndex){proceed(index, entryIndex)}"
        )
</template>
<script>
    import todoList from './todo-list.vue';

    module.exports = {
        props: {
            data: {
                required: true,
                type: Array
            }
        },
        components: {
            todoList
        },
        methods: {
            proceed(index, entryIndex) {
                if(index !== this.data.length - 1) {
                    const entry = this.data[index].content.splice(entryIndex, 1);
                    this.data[index + 1].content.push(...entry);
                }
            }
        }
    }
</script>
<style lang="less" scoped="scoped">
    @import "../../less/base.less";
    @import "../../less/global-mixins.less";
    .list-container {
        .clear();
        border-radius: 10px;
        background-color: #FFECEC;
        width: @container-width;
        margin: 0 auto;
    }
</style>