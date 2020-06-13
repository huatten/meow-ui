/**
 * basic基础组件 相关路由
 */
const Nav = () => import('@/views/nav.vue');
const basic = [
  {
    path: "/button",
    name: "button",
    components: {
      main: () => import('@/views/button/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "button 按钮"
    }
  },
  {
    path: "/icon",
    name: "icon",
    components: {
      main: () => import('@/views/icon/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "icon 图标"
    }
  },
  {
    path: "/loading",
    name: "loading",
    components: {
      main: () => import('@/views/loading/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "loading 加载状态"
    }
  },
  {
    path: "/cell",
    name: "cell",
    components: {
      main: () => import('@/views/cell/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "cell 单元格"
    }
  },
  {
    path: "/skeleton",
    name: "skeleton",
    components: {
      main: () => import('@/views/skeleton/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "skeleton 骨架屏"
    }
  },
  {
    path: "/image",
    name: "image",
    components: {
      main: () => import('@/views/image/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "image 图片"
    }
  },
  {
    path: "/popup",
    name: "popup",
    components: {
      main: () => import('@/views/popup/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "popup 弹出层"
    }
  },
  {
    path: "/transition",
    name: "transition",
    components: {
      main: () => import('@/views/transition/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "transition 动画"
    }
  }
];
export default basic;
