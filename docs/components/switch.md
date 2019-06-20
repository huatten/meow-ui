
## Switch 开关
### 功能说明
表单组件, 用来表示状态切换, 支持v-model
### 使用指南
``` js
import { MSwitch } from "vue-meow-ui";
Vue.component(MSwitch.name, MSwitch);
```
### 代码演示
#### 基础用法
```html
 <mw-switch v-model="openFlag"></mw-switch>
```
```js
export default{
  data(){
    return {
      openFlag: true
    }
  }
}
```
#### 禁用状态
```html
 <mw-switch v-model="openFlag" disabled></mw-switch>
```
#### 加载状态
```html
 <mw-switch v-model="openFlag" loading></mw-switch>
```
#### 自定义开关大小
```html
 <mw-switch v-model="openFlag" size="20"></mw-switch>
```
#### 自定义开关颜色
```html
 <mw-switch v-model="openFlag" background="#3483ff"></mw-switch>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| size | 开关大小 | `Number` | `28` | 单位`px` |
| background | 开关颜色 | `String` | `#ff8200` | - |
| disabled | 是否禁用 | `Boolean` | `false` | 不可点击 |
| loading | 开启加载状态 | `Boolean` | `false` | 不可点击 |
