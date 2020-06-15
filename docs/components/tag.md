
## Tag 标签
### 功能说明
标签组件, 用来展示状态和卖点的。
### 使用指南
``` js
import { MTag } from "vue-meow-ui";
Vue.component(MTag.name, MTag);
```
### 代码演示
#### 基础用法
```html
 <mw-tag>标签</mw-tag>
```

#### 圆角
通过 `round` 属性设置为圆角样式
```html
 <mw-tag round>标签</mw-tag>
```

#### 空心
通过 `plain` 属性设置为空心样式
```html
 <mw-tag plain>标签</mw-tag>
```

#### 自定义颜色
通过 `color` 控制实心标签颜色，如果为空心标签可以通过 `textColor` 属性来自定义标签颜色
```html
 <mw-tag color="#3483ff">标签</mw-tag>
 <mw-tag text-color="#3483ff" plain>标签</mw-tag>
```

#### 可关闭标签
通过 `closable` 属性控制标签是否可关闭，关闭时会触发 `close` 事件
```html
 <mw-tag closable>标签</mw-tag>
```

### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| round | 是否为圆角 | `Boolean` | `false` | - |
| plain | 是否为空心 | `Boolean` | `false` | - |
| color | 实心标签颜色 | `String` | - | - |
| textColor | 空心标签颜色 | `String` | - | - |
| closable | 是否可关闭 | `Boolean` | `false` | - |

### Slot
| 名称 | 说明 | 备注 |
|------|------|------|
| default | 标签显示内容 | 最好不要再嵌套标签 |

### Event
| 事件名称 | 说明 |
|------|------|
| click | 点击标签触发 |
| close | 关闭标签时触发 |
