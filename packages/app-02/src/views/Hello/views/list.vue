<template>
    <div>
        <h1>test 模块页面，获取abd模块下store 数据{{abdStoreNum}}</h1>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('abd');
export default {
    computed: {
        ...mapGetters(['abdStoreNum'])
    }
}
</script>
