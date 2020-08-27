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
  },
  {
    path: "/pagination",
    name: "pagination",
    components: {
      main: () => import('@/views/pagination/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "pagination 分页器"
    }
  }
];
export default nav;
