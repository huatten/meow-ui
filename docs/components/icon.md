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
#### svg图标
```html
 <mw-icon name="user" :svg="true"></mw-icon>
```
### Props 
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| name | 图标名称 | `String` | - | - |
| svg | 是否为svg图标 | `Boolean` | `false` | - |
| width | svg图标宽 | `Number` | - | - |
| height | svg图标高 | `Number` | - | - |
| size | 图标大小 | `Number` | `20` | - |