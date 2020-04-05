// 模块：测试
export default [
    { name: 'module-list', path: '/module/list', component: () => import(/* webpackChunkName: "view-list" */'./views/list.vue'), meta: { title: '测试' } }
];
