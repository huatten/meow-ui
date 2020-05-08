## Marquee 跑马灯轮播
### 使用指南
``` javascript
import MMarquee from "vue-meow-ui";
Vue.component(MMarquee.name, MMarquee);
```
### 代码演示
#### 基础用法
```html
 <mw-marquee>
   <mw-marquee-item>只有一条消息的时候不滚哦默认向上滚</mw-marquee-item>
 </mw-marquee>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| height | 滚动区可视高度 | `Number` | `35` | 单位`px` |
| align | flex布局对齐方式 | `String` | `left` | - |
| speed | 滚动速度 | `Number` | `500` | 单位 `ms`|
| duration | 滚动间隔时间 | `Number` | `2500` | 单位 `ms` |
| direction | 滚动方向 | `String` | `up` | 可选值 `down`|
