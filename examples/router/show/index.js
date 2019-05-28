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
  }
];
