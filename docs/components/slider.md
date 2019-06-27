
## Slider 滑块
### 功能说明
表单组件, 用来滑动滑块选值, 支持v-model
### 使用指南
``` js
import { MSlider } from "vue-meow-ui";
Vue.component(Slider.name, Slider);
```
### 代码演示
#### 基础用法
```html
 <mw-slider v-model="value"></mw-slider>
```
```js
export default{
  data(){
    return {
      value: 10
    }
  }
}
```
#### 禁用状态
```html
 <mw-slider v-value="value" disabled></mw-slider>
```
#### 自定义轨道高度
```html
 <mw-slider v-model="value" :bar-height="2"></mw-slider>
```
#### 自定义步长
```html
 <mw-slider v-model="value" :step="10"></mw-slider>
```
#### 自定义颜色
```html
 <mw-slider v-model="value" active-color="#3483ff" unactive-color="#3483ff"></mw-slider>
```
#### 自定义滑块
```html
 <mw-slider v-model="value">
   <span slot="handle" class="bar">{{value}}</span>
 </mw-slider>
```
#### 指定边界
```html
 <mw-slider v-model="value" :min="-10" :max="120"></mw-slider>
```
#### 隐藏tooltip
```html
 <mw-slider v-model="value" :showtip="false"></mw-slider>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| value | 当前值 | `Number` | `0` | - |
| disabled | 是否禁用 | `Boolean` | `false` | 不可点击 |
| max | 最大值 | `Number` | `100` | - |
| min | 最小值 | `Number` | `0` | - |
| step | 步长 | `Number` | `1` | - |
| bar-height | 轨道高度 | `Number` | `1` | - |
| active-color | 轨道激活颜色 | `String` | `#ff8200` | - |
| unactive-color | 轨道默认颜色 | `String` | `#f9f9f9` | - |
| showtip | 是否展示tooltip | `Boolean` | `true` | - |

### Slot
| 名称 | 说明 |
|------|------|
| handle | 自定义滑块 |

### Event
| 事件名称 | 说明 |
|------|------|
| change | 轨道进度值改变后触发 |

