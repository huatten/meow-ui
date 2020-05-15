import MLazyLoad from "./lazyload";
MLazyLoad.install = function (Vue) {
  Vue.component(MLazyLoad.name, MLazyLoad);
};
export default MLazyLoad;
