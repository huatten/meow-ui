## Button 按钮
### 功能说明
按钮组件。
### 使用指南
``` javascript
import { MButton } from "vue-meow-ui";
Vue.component(MButton.name, MButton);
```
### 代码演示
#### 基础用法
```html
 <mw-button>按钮</mw-button>
```
#### 按钮类型
通过 `type` 属性设置 Button 类型，一共有 `defalut` 、`primary` 、`info` 、`danger` 、`warning`  五种类型 、默认为 `defalut`。
```html
 <mw-button>默认按钮</mw-button>
 <mw-button type="primary">主要按钮</mw-button>
 <mw-button type="info">信息按钮</mw-button>
 <mw-button type="danger">危险按钮</mw-button>
 <mw-button type="warning">警告按钮</mw-button>
```
#### 朴素按钮
通过 `plain` 属性设置 Button 是否是朴素按钮，朴素按钮表现为文字颜色是按钮颜色，背景色为白色。
```html
 <mw-button type="primary" plain>朴素&&主要按钮</mw-button>
 <mw-button type="info" plain>朴素&&信息按钮</mw-button>
```
#### 圆角按钮
通过 `round` 属性设置 Button 是否是圆角按钮。
```html
 <mw-button type="primary" round>圆角&&主要按钮</mw-button>
```
#### 块级按钮
通过 `inline` 属性设置 Button 是否是块级按钮，默认为行内按钮。
```html
 <mw-button type="primary" :inline="false">块级&&主要按钮</mw-button>
```
#### 按钮尺寸
通过 `size` 来控制 Button 尺寸，默认为 `normal`， 另外可选值为 `large`、`small`。
```html
 <mw-button size="large">大尺寸按钮</mw-button>
 <mw-button size="small">小尺寸按钮</mw-button>
```
#### 添加图标
通过 `icon-name` 属性设置 Button 图标名称、 `icon-svg` 属性设置 Button 图标类型，默认为 font 类型。
```html
 <mw-button icon-name="prompt">icon-font图标按钮</mw-button>
 <mw-button icon-name="done" :icon-type="true">svg图标按钮</mw-button>
```
#### 禁用状态
通过 `disabled` 属性设置 Button 是否是可点击，默认可点击。
```html
 <mw-button type="primary" disabled>禁用&&主要按钮</mw-button>
```
#### 加载状态、加载类型以及加载图标大小
通过 `loading` 属性设置 Button 是否是处于加载状态，同时 `loading-type` 属性控制加载图标类型，默认值是 `roller`， 可选值有 `carousel` 和 `spinner`，`loading-size` 属性控制加载图标大小。
```html
 <mw-button type="primary" loading loading-size="20">加载中按钮</mw-button>
 <mw-button type="primary" loading loading-size="8" loading-type="carousel">加载中按钮</mw-button>
```
#### 按钮点击动效
通过 `ripple` 属性设置 Button 是否是有点击波纹动效，同时 `speed` 属性控制波纹展开速度，`opacity` 属性控制波纹透明度。
### Props 
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| type | 样式类型 | `String` | `default` | 可选值：`primary` 、`info` 、`danger` 、`warning` |
| plain | 是否为朴素按钮 | `Boolean` | `false` | 朴素按钮表现为文字颜色是按钮颜色，背景色为白色 |
| inline | 是否为行内按钮 | `Boolean` | `true` | - |
| size | 尺寸 | `String` | `normal` | 可选值为 `large`、 `small` |
| round | 是否为圆角按钮 | `Boolean` | `false` | - |
| invalid | 未激活按钮 | `Boolean` | `false` | 适用场景为：表单校验无效，按钮无法点击 |
| disabled | 是否禁用按钮 | `Boolean` | `false` | 适用场景为：无权限或不存在等，按钮无法点击 |
| native-type | 原生type属性 | `String` | `button` | 可选值：`submit` 、`button` 、`reset` [参照w3c说明](http://www.w3school.com.cn/tags/att_button_type.asp) |
| icon-name | 按钮icon名称 | `String` | - | 不传值则icon不显示，可选值请参考组件 `MIcon` 组件 |
| icon-svg | 按钮icon类型 | `Boolean` | `false` | 默认类型为字体图标，为true则是svg图标 |
| loading | 是否显示加载状态 | `Boolean` | `false` | - |
| loading-type | 加载图标类型 | `String` | `roller` | 可选值请参考组件 `Mloading` 组件，可选 `carousel`、`spinner` |
| loading-size | 加载图标大小 | `Number` | `70` | 可选值请参考组件 `Mloading` 组件 |
| ripple | 是否开启波纹点击效果 | `Boolean` | `false` | - |
| speed | 波纹展开速度 | `Number` | `11` | - |
| opacity | 波纹透明度 | `Boolean` | `0.3` | - |
