import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const Home = () => import('@/views/index.vue');
const Nav = () => import('@/views/nav.vue');
let routes = [
  { path: "*", redirect: "/home" },
  {
    path: "/home",
    name: "homeMain",
    components: { // 命名视图
      main: Home,
      nav: Nav
    },
    meta: {
      docTitle: "MeowUI - 一个正在建设中的移动端vue组件库"
    }
  }
];
const routerContext = require.context("./", true, /index\.js$/);
routerContext.keys().forEach(route => {
  if (route.startsWith("./index")) { return; }
  const routerModule = routerContext(route);
  routes = [...routes, ...(routerModule.default || routerModule)];
  console.log(routes);
});

const router = new Router({
  routes: routes,
  scrollBehavior(to, from, savedPosition) { // history模式下可用
    if (to.path === '/home') {
      if (savedPosition) {
        window.scrollTo({ top: savedPosition.y });
      } else {
        return null;
      }
    } else {
      return { x: 0, y: 0 };
    }
  }
});
export default router;
