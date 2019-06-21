/**
 * form表单 相关路由
 */
export default [
  {
    path: "/switch",
    name: "switch",
    component: resolve => {
      require.ensure(
        ["@/views/switch/index.vue"],
        () => {
          resolve(require("@/views/switch/index.vue"));
        },
        "switch"
      );
    },
    meta: {
      docTitle: "switch开关"
    }
  },
  {
    path: "/radio",
    name: "radio",
    component: resolve => {
      require.ensure(
        ["@/views/radio/index.vue"],
        () => {
          resolve(require("@/views/radio/index.vue"));
        },
        "radio"
      );
    },
    meta: {
      docTitle: "radio单选"
    }
  }
];
