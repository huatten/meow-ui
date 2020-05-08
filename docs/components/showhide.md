
## Showhide 显示折叠文字
### 功能说明
显示折叠文字组件，文本超出规定显示的行数，折叠起来。
### 使用指南
``` js
import { MShowHide } from "vue-meow-ui";
Vue.component(MShowHide.name, MShowHide);
```
### 代码演示
#### 基础用法
```vue
 <mw-showhide :text="text1"></mw-showhide>
 <mw-showhide>{{text1}}</mw-showhide>
```
```js
export default{
  data(){
    return {
      text1:
        "真当多人运动是王者五排啊。好多年前我就在ins上关注过周扬青，为人其实很低调，不嚣张，没有过激的言论，很踏实，而且很有背景。但是这种女人一旦发威，比那些平时炫富的草包强多了。所以，等着吃瓜吧，除非周扬青自己放弃了。"
    }
  }
}
```
#### 设置最大行数
```vue
 <mw-showhide :text="text1" :max-line="5"></mw-showhide>
```
#### 设置行高
```vue
 <mw-showhide :text="text1" :line-height="28"></mw-showhide>
```
#### 设置折叠按钮文案
```vue
 <mw-showhide showText="查看全文" hideText="收起全文" :text="text1"></mw-showhide>
```
#### 自定义按钮颜色
```vue
<mw-showhide btnColor="#409eff" :text="text1"></mw-showhide>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| text | 开关大小 | `String` | - | - |
| lineHeight | 文案行高 | `String` | `21` | 单位`px` |
| maxLine | 最大行数 | `String` | `4` | - |
| showText | 展开文案 | `String` | 展开 | - |
| hideText | 收起大小 | `String` | 收起 | - |
| btnColor | 按钮颜色 | `String` | `#ff8200` | - |

