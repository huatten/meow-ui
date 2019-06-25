
## Radio 单选
### 功能说明
表单组件, 用来单选, 支持v-model
### 使用指南
``` js
import { MRadio } from "vue-meow-ui";
Vue.component(MRadio.name, MRadio);
```
### 代码演示
#### 基础用法
```html
<p>下面的选项中，什么瓜不能吃？</p>
<mw-radio label="冬瓜" v-model="radio1" value="冬瓜"></mw-radio>
<mw-radio label="西瓜" v-model="radio1" value="西瓜"></mw-radio>
<mw-radio label="南瓜" v-model="radio1" value="南瓜"></mw-radio>
<mw-radio label="傻瓜" v-model="radio1" value="傻瓜"></mw-radio>
```
```js
export default{
  data(){
    return {
      radio1: ""
    }
  }
}
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| v-model | 选中项的value | `any` | - | - |
| value | 唯一键值 | `any` | - | - |
| label | 文案 | `String` | - | 也可以用slot模式 |
| disabled | 是否禁用 | `Boolean` | `false` | 不可点击 |
| horizontal | 是否水平排列 | `Boolean` | `false` | - |
| color | radio颜色 | `String` | `#ff8200` | - |
| icon-position | 图标位置 | `String` | `left` | 值为right的时候图标右对齐 |
| icon | 选中项图标 | `String` | `checked` | - |
| icon-inverse | 非选中项图标 | `String` | `check` | - |
| icon-inverse | 非选中项图标 | `String` | `check` | - |
| icon-disabled | 禁用项图标 | `String` | `check-disabled` | - |
| icon-svg | 是否使用svg图标 | `Boolean` | `false` | - |
| icon-size | 图标尺寸 | `String、Number` | `22` | - |
