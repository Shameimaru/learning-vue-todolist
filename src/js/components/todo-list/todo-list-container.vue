<template lang="pug">
    div(class="list-container")
        todo-list(
            v-for="(value, index) in data",
            :key="index",
            :dataIndex="index",
            :title="value.title",
            :content="value.content"
        )
</template>
<script>
    import {mapGetters} from 'vuex';
    import todoList from './todo-list.vue';
    import * as types from '../../store/modules/todo-list/mutationTypes';

    module.exports = {
        computed: {
            ...mapGetters(['data'])
        },
        components: {
            todoList
        },
        created() {
            this.$store.dispatch(types.INIT_DATA)
        }
    }
</script>
<style lang="less" scoped="scoped">
    @import "../../../less/base.less";
    @import "../../../less/global-mixins.less";

    .list-container {
        .clear();
        border-radius: 10px;
        background-color: #FFECEC;
        width: @container-width;
        margin: 0 auto;
    }
</style>