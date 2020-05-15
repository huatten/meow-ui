/**
 * show 展示组件 相关路由
 */
export default [
  {
    path: "/marquee",
    name: "marquee",
    component: resolve => {
      require.ensure(
        ["@/views/marquee/index.vue"],
        () => {
          resolve(require("@/views/marquee/index.vue"));
        },
        "marquee"
      );
    },
    meta: {
      docTitle: "marquee 跑马灯"
    }
  },
  {
    path: "/noticebar",
    name: "noticebar",
    component: resolve => {
      require.ensure(
        ["@/views/noticebar/index.vue"],
        () => {
          resolve(require("@/views/noticebar/index.vue"));
        },
        "noticebar"
      );
    },
    meta: {
      docTitle: "noticebar 通知栏"
    }
  },
  {
    path: "/popup",
    name: "popup",
    component: resolve => {
      require.ensure(
        ["@/views/popup/index.vue"],
        () => {
          resolve(require("@/views/popup/index.vue"));
        },
        "popup"
      );
    },
    meta: {
      docTitle: "popup 弹出层"
    }
  },
  {
    path: "/notify",
    name: "notify",
    component: resolve => {
      require.ensure(
        ["@/views/notify/index.vue"],
        () => {
          resolve(require("@/views/notify/index.vue"));
        },
        "notify"
      );
    },
    meta: {
      docTitle: "notify 通知栏"
    }
  },
  {
    path: "/toast",
    name: "toast",
    component: resolve => {
      require.ensure(
        ["@/views/toast/index.vue"],
        () => {
          resolve(require("@/views/toast/index.vue"));
        },
        "toast"
      );
    },
    meta: {
      docTitle: "toast 轻提示"
    }
  },
  {
    path: "/collapse",
    name: "collapse",
    component: resolve => {
      require.ensure(
        ["@/views/collapse/index.vue"],
        () => {
          resolve(require("@/views/collapse/index.vue"));
        },
        "collapse"
      );
    },
    meta: {
      docTitle: "collapse 折叠面板"
    }
  },
  {
    path: "/divider",
    name: "divider",
    component: resolve => {
      require.ensure(
        ["@/views/divider/index.vue"],
        () => {
          resolve(require("@/views/divider/index.vue"));
        },
        "divider"
      );
    },
    meta: {
      docTitle: "divider 风格线"
    }
  },
  {
    path: "/showhide",
    name: "showhide",
    component: resolve => {
      require.ensure(
        ["@/views/showhide/index.vue"],
        () => {
          resolve(require("@/views/showhide/index.vue"));
        },
        "showhide"
      );
    },
    meta: {
      docTitle: "showhide 显示隐藏"
    }
  },
  {
    path: "/lazyload",
    name: "lazyload",
    component: resolve => {
      require.ensure(
        ["@/views/lazyload/index.vue"],
        () => {
          resolve(require("@/views/lazyload/index.vue"));
        },
        "lazyload"
      );
    },
    meta: {
      docTitle: "lazyload 懒加载"
    }
  }
];
