import MSwitch from './switch'
import MIcon from './icon'
const components = { MSwitch, MIcon }

//定义插件安装方法
const install = function (Vue) {
  if (!Vue || install.installed) {
    return
  }
  //注册全局组件
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    if (component.name) {
      Vue.component(component.name, component)
    }
  })
}
//判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
//对外导出
const MEOW = {
  install,
  ...components
}
export default MEOW

