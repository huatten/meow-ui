## Cell 单元格
### 功能说明
单元格组件, 移动端常见的列表子项布局。
### 使用指南
``` javascript
import { MCell } from "vue-meow-ui";
Vue.component(MCell.name, MCell);
```
### 代码演示
#### 基础用法
```html
 <mw-cell title="普通单元格" @click="cellClick"></mw-cell>
```
#### 动作单元格
通过 `arrow` 属性设置 Cell 是否展示右侧箭头动作指示标示。
```html
 <mw-cell title="动作单元格" arrow @click="cellClick"></mw-cell>
```
#### 禁用单元格
通过 `disabled` 属性设置 Cell 是否禁用不可点击。
```html
 <mw-cell title="禁用单元格" disabled @click="cellClick"></mw-cell>
```
#### 设置单元格左侧描述文案
通过 `abstract` 属性设置 Cell 左侧描述文案。
```html
<mw-cell
  title="交通银行"
  arrow
  no-border
  abstract="每日限额10000元"
  @click="cellClick"
>
  <div slot="left" class="left">
    <mw-icon name="problem" size="40"></mw-icon>
  </div>
</mw-cell>
```
#### 设置单元格右侧附加文案
通过 `rightText` 具名插槽设置 Cell 右侧附加文案。
```html
 <mw-cell title="性别" right-text="女" arrow @click="cellClick"></mw-cell>
```
### Props 
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| title | 标题 | `String` | - | - |
| arrow | 右侧动作箭头标示 | `Boolean` | `false` | - |
| abstract | 左侧描述文案 | `String` | - | 设置单元格左侧描述文案：常见如银行卡列表限额描述 |
| right-text | 右侧附加文案 | `String` | - | - |
| no-border | 删除边框 | `Boolean` | `false` | - |
| disabled | 是否禁用 | `Boolean` | `false` | - |

### Event
`@click(event)`
### slot
* `defalut`： 内容默认插槽
* `left`： 左侧插槽
* `right`： 右侧插槽