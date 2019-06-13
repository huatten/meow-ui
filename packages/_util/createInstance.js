/**
 * 用制定的创建vue实例
 * @param {Object} Vue构造函数
 * @param {Object} 组件对象
 */
let instances = {};
export default function (Vue, Component, {
  props = {},
  on = {},
  isSingle = true
} = {}) {
  const id = `${Component.name}-component`;
  if (!isSingle || instances[id] === undefined) {
    //创建挂载点
    const node = document.createElement('div');
    node.id = id;
    //插入文档最后
    document.body.appendChild(node);
    // 创建子类 构造器
    const SubConstructor = Vue.extend(Component);
    // 创建实例
    let vm =  new SubConstructor();
    //传入初始化的值
    for(let key in props){
      vm[key] = props[key]
    }
    //监听事件
    for(let eventName in on){
      vm.$off(eventName);
      vm.$on(eventName, on[eventName])
    }
    // 挂载
    vm.$mount(`#${node.id}`);
    instances[id] = vm;
    return vm;
  }else{
    let vm = instances[id];
    //传入初始化的值
    for(let key in props){
      vm[key] = props[key]
    }
    //监听事件
    for(let eventName in on){
      vm.$off(eventName);
      vm.$on(eventName, on[eventName])
    }
    return vm;
  }
}