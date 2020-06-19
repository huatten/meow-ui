/**
 * nav导航 相关路由
 */
const Nav = () => import('@/views/nav.vue');
const nav = [
  {
    path: "/navbar",
    name: "navbar",
    components: {
      main: () => import('@/views/navbar/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "navbar 导航栏"
    }
  }
];
export default nav;
