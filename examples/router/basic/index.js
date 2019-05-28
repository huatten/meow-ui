/**
 * basic基础组件 相关路由
 */
export default [
  {
    path: "/button",
    name: "button",
    component: resolve => {
      require.ensure(
        ["@/views/button/index.vue"],
        () => {
          resolve(require("@/views/button/index.vue"));
        },
        "button"
      );
    },
    meta: {
      docTitle: "button按钮"
    }
  },
  {
    path: "/icon",
    name: "icon",
    component: resolve => {
      require.ensure(
        ["@/views/icon/index.vue"],
        () => {
          resolve(require("@/views/icon/index.vue"));
        },
        "icon"
      );
    },
    meta: {
      docTitle: "icon图标"
    }
  },
  {
    path: "/indicator",
    name: "indicator",
    component: resolve => {
      require.ensure(
        ["@/views/indicator/index.vue"],
        () => {
          resolve(require("@/views/indicator/index.vue"));
        },
        "indicator"
      );
    },
    meta: {
      docTitle: "indicator加载状态"
    }
  },
  {
    path: "/cell",
    name: "cell",
    component: resolve => {
      require.ensure(
        ["@/views/cell/index.vue"],
        () => {
          resolve(require("@/views/cell/index.vue"));
        },
        "cell"
      );
    },
    meta: {
      docTitle: "cell 单元格"
    }
  }
];
