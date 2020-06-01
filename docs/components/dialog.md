
## Dialog 弹窗
### 功能说明
弹窗组件, 用于消息提示、消息确认、在当前页面内完成特定的交互操作，支持组件调用和函数调用两种方式

### 组件调用
``` js
import { MDialog } from "vue-meow-ui";
Vue.component(MDialog.name, MDialog);
```
### 函数调用
``` js
import { MDialog } from "vue-meow-ui";
this.$dialog({title: '标题', content: '我是一条消息'})
```
### 代码演示
#### 消息提示
用于提示消息，只有一个确认按钮
```html
 <mw-dialog
    v-model="show"
    :title="title"
    :show-cancel="false"
    :content="content"
  ></mw-dialog>
```
```js
export default{
  data(){
    return {
      show: false,
      title: "提示",
      content: "种豆得瓜，种在了大腚上。"
    }
  }
}
```
#### 消息确认取消
用于确认消息，包含取消和确认按钮
```html
 <mw-dialog v-model="show" :title="title" :content="content"></mw-dialog>
```
```js
export default{
  data(){
    return {
      show: false,
      title: "温馨提示",
      content: "您真的要删除吗？"
    }
  }
}
```
#### 显示关闭按钮
```html
 <mw-dialog v-model="show" :closable="true" :content="content"></mw-dialog>
```
```js
export default{
  data(){
    return {
      show: false,
      content: "我是可关闭的弹窗"
    }
  }
}
```
#### 切换弹窗动画
可以切换动画类名，等价于transition的 `name` 属性，可参考 [Transition](./transition.md) 组件，默认为淡出淡出 `mw-fade`
```html
 <mw-dialog v-model="show" transition="mw-zoom" :content="content"></mw-dialog>
```
```js
export default{
  data(){
    return {
      show: false,
      content: "弹窗动画为zoom由远及近"
    }
  }
}
```
### 弹窗 Props
通过组件调用 `MDialog` 时，弹窗props如下：
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| v-model | 双向绑定是否显示弹窗 | Boolean | `false` | - |
| title | 弹窗标题 | String | - | - |
| content | 文本内容 | String | - | - |
| closable | 是否显示关闭按钮 | Boolean | `false` | - |
| hasMask | 是否有蒙层 | Boolean | `true` | - |
| maskClosable | 点击蒙层是否可关闭 | Boolean | `false` | - |
| transition | 弹窗过渡动画类名，等价于transition的 `name` 属性 | String | `mw-fade` | 参考 [Transition](./transition.md) |
| lockScroll | 是否锁定背景滚动 | Boolean | `true` | - |


### 弹窗按钮 Props
通过组件调用 `MDialog` 时，弹窗按钮props如下：
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| showCancel | 是否显示取消按钮 | Boolean | `false` | - |
| cancelText | 取消按钮文案 | String | `取消` | - |
| cancelColor | 取消按钮颜色 | String | `#666f83` | - |
| onCancel | 取消按钮点击事件 | Function | - | - |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | - |
| confirmText | 确定按钮文案 | Boolean | `false` | - |
| confirmColor | 确定按钮颜色 | String | `#ff8200` | - |
| onConfirm | 确定按钮点击事件 | Function | - | - |

### Slot
通过组件调用 `MDialog` 时，支持以下插槽：
| 插槽名 | 说明 | 备注 |
|------|------|------|
| default | 默认插槽，可自定义弹窗内容、样式等 | - |
| header | 弹窗顶部插槽，常用户放置图片 | - |

### Event
通过组件调用 `MDialog` 时，支持以下事件：
| 事件调用 | 说明 | 参数 | 备注 |
|------|------|------|------|
| @open | 打开弹窗时触发 | - | - |
| @opened | 打开弹窗且动画结束后触发 | - | - |
| @close | 关闭弹窗时触发 | - | - |
| @closed | 关闭弹窗且动画结束后触发 | - | - |
| @confirm | 点击确认按钮触发 | - | - |
| @cancel | 点击取消按钮触发 | - | - |

### Options
通过组件调用 `MDialog` 时，支持以下选项配置：
| 参数 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| title | 是否显示取消按钮 | Boolean | `false` | - |
| content | 文本内容 | String | - | - |
| closable | 是否显示关闭按钮 | Boolean | `false` | - |
| hasMask | 是否有蒙层 | Boolean | `true` | - |
| maskClosable | 点击蒙层是否可关闭 | Boolean | `false` | - |
| transition | 弹窗过渡动画类名  | String | `mw-zoom` | - |
| lockScroll | 是否锁定背景滚动 | Boolean | `true` | - |
| cancelColor | 取消按钮颜色 | String | `#666f83` | - |
| onCancel | 取消按钮点击事件 | Function | - | - |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | - |
| confirmText | 确定按钮文案 | Boolean | `false` | - |
| confirmColor | 确定按钮颜色 | String | `#ff8200` | - |
| onConfirm | 确定按钮点击事件 | Function | - | - |