// 模块：测试
export default [
    { name: 'hello-list', path: '/hello/list', component: () => import(/* webpackChunkName: "test-list" */'./views/list.vue'), meta: { title: '测试' } }
];
