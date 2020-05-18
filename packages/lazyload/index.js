import MLazyLoad from "./lazyload.vue";
MLazyLoad.install = function (Vue) {
  Vue.component(MLazyLoad.name, MLazyLoad);
};
export default MLazyLoad;