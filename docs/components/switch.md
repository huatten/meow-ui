
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
#### 自定义开关加载图标大小
```html
 <mw-switch v-model="openFlag" loading-size="40"></mw-switch>
```