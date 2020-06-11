## Loading 指示器
### 使用指南
``` javascript
import MLoading from "vue-meow-ui";
Vue.component(MLoading.name, MLoading);
```
### 代码演示
#### 基础用法
```html
 <mw-loading></mw-loading>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| type | 展示类型 | `String` | `roller` | 可选值有：`carousel`、`spinner` |
| size | 图标大小 | `Number` | `70` | - |
| width | 图标线条宽度 | `Number` | `3` | 只用于 `roller`类型 |
| fill | 图标填充色 | `String` | `#c8c9cc` | `spinner`类型除外 |
| text | 提示文字 | `String` | - | - |
| color | 文字颜色 | `String` | `#666f83` | - |
| vertical | 垂直排列 | `Boolean` | `#false` | - |
| fullScreen | 全屏展示 | `Boolean` | `false` | - |
| hasMask | 是否展示蒙层| `Boolean` | `true` | 只再全屏loading状态下生效 |
