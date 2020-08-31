/**
 * feedback 反馈组件 相关路由
 */
const Nav = () => import('@/views/nav.vue');
const feedback = [
  {
    path: "/notify",
    name: "notify",
    components: {
      main: () => import('@/views/notify/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "notify 通知栏"
    }
  },
  {
    path: "/toast",
    name: "toast",
    components: {
      main: () => import('@/views/toast/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "toast 轻提示"
    }
  },
  {
    path: "/dialog",
    name: "dialog",
    components: {
      main: () => import('@/views/dialog/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "dialog 弹出框"
    }
  },
  {
    path: "/action-sheet",
    name: "action-sheet",
    components: {
      main: () => import('@/views/action-sheet/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "action-sheet 动作面板"
    }
  },
  {
    path: "/infinite-scroll",
    name: "infinite-scroll",
    components: {
      main: () => import('@/views/infinite-scroll/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "infinite-scroll 无限滚动"
    }
  }
];

export default feedback;
