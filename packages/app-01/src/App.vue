<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">app-01</router-link>|
            <router-link to="/app-02/test">app-02(页面)</router-link>|
            <router-link to="/module/list">app-02(模块)</router-link>|
            <router-link to="/app-03/test">app-03</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    async created () {
        let m = await import('app_02/Module');
        //  获取模块信息
        let { router, store } = m.default;
        // 动态 router
        this.$router.addRoutes(router);
        // 动态 store
        for (let name in store) { this.$store.registerModule(name, store[name]); }
        // for (let remoteModule of ['app_02/Module', 'app_02/Hello']) {
        //     let m = await import(`${remoteModule}`);
        //     //  获取模块信息
        //     let { router, store } = m.default;
        //     // 动态 router
        //     this.$router.addRoutes(router);
        //     // 动态 store
        //     for (let name in store) { this.$store.registerModule(name, store[name]); }
        // }
        // 测试
        // const list = await Promise.all(['Module', 'Hello'].map((remoteModule) => {
        //     return import(`app_02/${remoteModule}`);
        // }));
    }
}
</script>