## Icon 图标
### 功能说明
图标组件, 默认是icon-font字体图标，支持svg图标。
### 使用指南
``` javascript
import { MIcon } from "vue-meow-ui";
Vue.component(MIcon.name, MIcon);
```
### 代码演示
#### icon-font图标
```html
 <mw-icon name="user"></mw-icon>
```
#### icon-font图标更改大小
可以通过 `size` 属性来改变icon-font图标大小，单位为 `px`
```html
 <mw-icon name="user" size="24"></mw-icon>
```
#### icon-font图标更改颜色
可以通过 `color` 属性来改变icon-font图标颜色
```html
 <mw-icon name="user" color="red"></mw-icon>
```
#### svg图标
可以通过 `svg` 属性来设置是否显示为svg图标
```html
 <mw-icon name="user" :svg="true" size="30"></mw-icon>
```
#### svg图标更改大小
可以通过 `size` 属性来设置svg图标大小

### Props 
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| name | 图标名称 | `String` | - | - |
| color | 图标颜色 | `String` | `currentColor` | - |
| svg | 是否为svg图标 | `Boolean` | `false` | - |
| size | 图标大小 | `Number`/`String` | `20` | icon-font类型单位为 `px` |

### Event
| 事件调用 | 说明 | 参数 | 备注 |
|------|------|------|------|
| @click | 点击图标时触发 | - | - |

#### 自定义svg图标说明
 自定义svg图标需使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)，svg文件名即图标名称`name`。

 1.安装svg-sprite-loader

  ```
  npm install svg-sprite-loader --save-dev
  ```
  2.webpack配置 

  ```javascript
// vue.config.js  
const path = require("path");
  const resolve = dir => path.join(__dirname, dir);
  module.exports = {
    chainWebpack: config => {
      //svg-sprite-loader配置
      const svgRule = config.module.rule("svg"); // 找到svg-loader
      svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
      svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
      svgRule // 添加svg新的loader处理
        .test(/\.svg$/)
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
          symbolId: "[name]"
        });
      // 修改images loader 添加svg处理
      const imagesRule = config.module.rule("images");
      // 将某个路径下所有svg交给 svg-sprite-loader 插件处理，demo中默认指定目录为 examples/assets/svg-icon
      imagesRule.exclude.add(resolve("examples/assets/svg-icon"));
      config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
    }
  };
  ```
  3.引入图标

 注意第二步的配置svg-sprite-loader 插件处理的目录为 `examples/assets/svg-icon`， 因此将你下载好的svg图标放入此目录内。

  ```vue
<template>
	<div class="icon">
    <mw-icon name="setting" svg></mw-icon>
    <mw-icon name="info" svg></mw-icon>
    <mw-icon name="info" svg></mw-icon>
  </div>
</template>
<script>
import { MIcon } from 'vue-meow-ui'
export default {
  name: 'icons',
  components: {
    [MIcon.name]: MIcon
  }
}
  ```