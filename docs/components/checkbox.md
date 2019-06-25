
## Checkbox 开关
### 功能说明
表单组件, 用来多选, 支持v-model
### 使用指南
``` js
import { MCheckbox, MCheckboxGroup } from "vue-meow-ui";
Vue.component(MCheckbox.name, MCheckbox);
Vue.component(MCheckboxGroup.name, MCheckboxGroup);
```
### 代码演示
#### 基础用法
```html
<p>下面的选项中，什么瓜不能吃？</p>
<mw-checkbox label="呆瓜" v-model="checked" value="呆瓜"></mw-checkbox>
<mw-checkbox label="傻瓜" v-model="checked" value="傻瓜"></mw-checkbox>
```
```js
export default{
  data(){
    return {
      checked: false,
    }
  }
}
```
#### 搭配MCheckboxGroup使用
```html
<p>2.下面哪个装备王者荣耀里面的射手该出的？</p>
<mw-checkbox-group v-model="tool">
  <mw-checkbox name="痛苦面具">痛苦面具</mw-checkbox>
  <mw-checkbox name="救赎之意">救赎之意</mw-checkbox>
  <mw-checkbox name="圣杯">圣杯</mw-checkbox>
  <mw-checkbox name="闪电匕首">闪电匕首</mw-checkbox>
  <mw-checkbox name="破军">破军</mw-checkbox>
</mw-checkbox-group>
```
```js
export default{
  data(){
    return {
      tool: [],
    }
  }
}
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| v-model | 选中项的value | `any` | - | - |
| name | 唯一键值 | `any` | - | - |
| label | 文案 | `String` | - | 也可以用slot模式 |
| disabled | 是否禁用 | `Boolean` | `false` | 不可点击 |
| horizontal | 是否水平排列 | `Boolean` | `false` | - |
| color | checkbox颜色 | `String` | `#ff8200` | - |
| icon-position | 图标位置 | `String` | `left` | 值为right的时候图标右对齐 |
| icon | 选中项图标 | `String` | `checked` | - |
| icon-inverse | 非选中项图标 | `String` | `check` | - |
| icon-inverse | 非选中项图标 | `String` | `check` | - |
| icon-disabled | 禁用项图标 | `String` | `check-disabled` | - |
| icon-svg | 是否使用svg图标 | `Boolean` | `false` | - |
| icon-size | 图标尺寸 | `String、Number` | `22` | - |
