import MSkeleton from "./skeleton.vue";
MSkeleton.install = function (Vue) {
  Vue.component(MSkeleton.name, MSkeleton);
};
export default MSkeleton;
