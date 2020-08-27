/**
 * form表单 相关路由
 */
const Nav = () => import('@/views/nav.vue');
const form = [
  {
    path: "/switch",
    name: "switch",
    components: {
      main: () => import('@/views/switch/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "switch 开关"
    }
  },
  {
    path: "/radio",
    name: "radio",
    components: {
      main: () => import('@/views/radio/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "radio 单选"
    }
  },
  {
    path: "/checkbox",
    name: "checkbox",
    components: {
      main: () => import('@/views/checkbox/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "checkbox 复选"
    }
  },
  {
    path: "/slider",
    name: "slider",
    components: {
      main: () => import('@/views/slider/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "slider 滑块"
    }
  },
  {
    path: "/stepper",
    name: "stepper",
    components: {
      main: () => import('@/views/stepper/index.vue'),
      nav: Nav
    },
    meta: {
      docTitle: "stepper 步进器"
    }
  }
];
export default form;
