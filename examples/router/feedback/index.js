/**
 * feedback 反馈组件 相关路由
 */
export default [
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
    path: "/dialog",
    name: "dialog",
    component: resolve => {
      require.ensure(
        ["@/views/dialog/index.vue"],
        () => {
          resolve(require("@/views/dialog/index.vue"));
        },
        "dialog"
      );
    },
    meta: {
      docTitle: "dialog 弹出框"
    }
  },
  {
    path: "/action-sheet",
    name: "action-sheet",
    component: resolve => {
      require.ensure(
        ["@/views/action-sheet/index.vue"],
        () => {
          resolve(require("@/views/action-sheet/index.vue"));
        },
        "action-sheet"
      );
    },
    meta: {
      docTitle: "action-sheet 动作面板"
    }
  }
];
