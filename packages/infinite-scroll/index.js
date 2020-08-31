import MInfiniteScroll from "./infinite-scroll.vue";
MInfiniteScroll.install = function (Vue) {
  Vue.component(MInfiniteScroll.name, MInfiniteScroll);
};
export default MInfiniteScroll;
