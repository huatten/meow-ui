
## Progress 水平进度条
### 功能说明
水平进度条组件, 用来展示进度。
### 使用指南
``` js
import { MProgress } from "vue-meow-ui";
Vue.component(MProgress.name, MProgress);
```
### 代码演示
#### 基础用法
`v-model` 实现双向绑定表示进度百分比
```html
 <mw-progress v-model="precent"></mw-progress>
```

#### 设置高度和百分比大小
通过 `height` 属性和 `percentSize` 属性设置进度条高度和百分比数字的文字大小
```html
 <mw-progress :height="height" :percentSize="fontSize"></mw-progress>
```

#### 圆角进度条
通过 `round` 属性设置为圆角进度条
```html
 <mw-progress round></mw-progress>
```

#### 自定义颜色
通过 `activeColor` 和 `unactiveColor` 控制进度条颜色，
```html
 <mw-progress v-model="value" :activeColor="activeColor" :unactiveColor="unactiveColor"><mw-progress>
```

#### 开启进度条动画
通过 `animate` 属性控制进度条是否显示动画
```html
 <mw-progress animate></mw-progress>
```

#### 设置百分比位置
通过 `percent-position` 属性控制进度条百分比文字显示位置，值有 `top` 、`center` 、`inner`
```html
 <mw-progress percent-position="center"></mw-progress>
```
