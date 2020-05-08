## Divider 分割线
### 功能说明
区隔内容的分割线组件。
### 使用指南
``` javascript
import { MDivider } from "vue-meow-ui";
Vue.component(MDivider.name, MDivider);
```
### 代码演示
#### 基础用法

默认渲染一条1px的水平分割线

```vue
 <mw-divider></mw-divider>
```
#### 展示文本

通过插槽在可以分割线中间插入文本

```html
 <mw-divider>默认居中</mw-divider>
```
#### 指定内容位置

通过 `position` 指定内容展示位置是居左 `left` 还是 居右`right`

```vue
<mw-divider position="left">居左对齐</mw-divider>
<mw-divider position="right">居右对齐</mw-divider>
```

#### 渲染虚线、点线样式

通过 `dashed` 属性和 `dotted` 属性可以将分割线渲染为虚线和点线

```vue
<mw-divider dashed>渲染虚线</mw-divider>
<mw-divider dotted>渲染点线</mw-divider>
```

#### 自定义样式

通过 `style`属性可以直接修改设置样式

```vue
<mw-divider :style="{color: '#f00', borderColor: '#f90'}">自定义样式</mw-divider>
```

#### 垂直分割线

通过 `direction`属性可以设置分割线的方向，垂直分割可设置为 `vertical`，默认为 `horizontal`。注意设置为垂直分割线的时候 `position`、`dashed`、`dotted` 将不生效。

```vue
<div class="vertical">
  <span>亚瑟</span>
  <mw-divider direction="vertical"></mw-divider>
  <span>老夫子</span>
  <mw-divider direction="vertical"></mw-divider>
  <span>安其拉</span>
</div>
```

### Props 

| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| direction | 分割线方向 | `String` | `horizontal` | `horizontal`/`vertical` |
| position | 图标名称 | `String` | `center` | `left`/`right` |
| dashed | 是否为虚线 | `Boolean` | `false` | - |
| dotted | 是否为点线 | `Boolean` | `false` | - |

### Slots
| 名称 | 说明  | 备注 |
|------|------|------|
| default | 内容 | - |