<template>
    <div>
        <h1>module 模块页面，{{url}}</h1>
        <el-button @click="add" type="primary">新增</el-button>
        <el-button @click="reduce" type="primary">减少</el-button>
        <h1>{{abdStoreNum}}</h1>
        <div style="height:1000px;"></div>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('abd');
// import * as api from '../api';
export default {
    computed: {
        ...mapGetters(['abdStoreNum'])
    },
    methods: {
        ...mapActions(['add', 'reduce']),
    },
    async mounted () {
    }
}
</script>
