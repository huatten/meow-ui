/**
 * show 展示组件 相关路由
 */
const Nav = () => import('@/views/nav.vue');
const show = [
  {
    path: "/marquee",
    name: "marquee",
    components: {
      main: () => import('@/views/marquee/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "marquee 跑马灯"
    }
  },
  {
    path: "/noticebar",
    name: "noticebar",
    components: {
      main: () => import('@/views/noticebar/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "noticebar 通知栏"
    }
  },
  {
    path: "/collapse",
    name: "collapse",
    components: {
      main: () => import('@/views/collapse/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "collapse 折叠面板"
    }
  },
  {
    path: "/divider",
    name: "divider",
    components: {
      main: () => import('@/views/divider/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "divider 风格线"
    }
  },
  {
    path: "/showhide",
    name: "showhide",
    components: {
      main: () => import('@/views/showhide/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "showhide 显示隐藏"
    }
  },
  {
    path: "/lazyload",
    name: "lazyload",
    components: {
      main: () => import('@/views/lazyload/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "lazyload 懒加载"
    }
  },
  {
    path: "/progress",
    name: "progress",
    components: {
      main: () => import('@/views/progress/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "progress 进度条"
    }
  }
];
export default show;
