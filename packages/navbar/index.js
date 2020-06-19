import MNavBar from "./navbar.vue";
MNavBar.install = function (Vue) {
  Vue.component(MNavBar.name, MNavBar);
};
export default MNavBar;
