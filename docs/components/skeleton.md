
## Skeleton 骨架屏
### 功能说明
用于数据尚未加载前先展示出页面的大致结构的加载状态，本组件只是标题、头像和内容的组合，可根据 `skeleton-item` 组件自行构建扩展，或者参考[饿了么](https://github.com/ElemeFE/page-skeleton-webpack-plugin)更高级的[自动生成骨架屏](https://github.com/Jocs/jocs.github.io/issues/22)操作。
### 使用指南
``` js
import { MSkeleton } from "vue-meow-ui";
Vue.component(MSkeleton.name, MSkeleton);
```
### 代码演示
#### 基础用法
```vue
<mw-skeleton></mw-skeleton>
```

#### 显示标题占位
```vue
 <mw-skeleton title></mw-skeleton>
```

#### 显示头像占位
```vue
 <mw-skeleton avatar></mw-skeleton>
```

#### 加载数据
```vue
  <mw-skeleton avatar title :loading="loading">
    <div class="demo">
      <div class="demo-avatar">
        <img src="//c-ssl.duitang.com/uploads/blog/201507/21/20150721124850_BANtz.thumb.1000_0.jpeg"
        />
      </div>
      <div class="demo-content">
        <div class="demo-title">送什么礼物好</div>
        <div class="demo-row">林深时见鹿，梦醒时见你，这款王丽坤同款的925纯银鹿角项链，非常别致啊，蓝色的宝石部分又增加了质感。</div>
      </div>
    </div>
  </mw-skeleton>
```
```js
export default{
  data(){
    return {
      loading: true
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
}
```

### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| loading | 是否显示骨架屏 | `Boolean` | true | - |
| title | 是否展示标题占位 | `Boolean` | false | - |
| title-width | 标题宽度 | `Number` | 40 | 单位`%` |
| avatar | 是否展示头像占位 | `Boolean` | false | - |
| avatar-size | 头像大小 | `Number` | 50 | 单位`px` |
| rows | 内容占位行数 | `Number` | 3 | - |
| rows-width | 内容占位宽度 | `Number` | 100 | 单位`%` |
| rows-height | 内容占位高度 | `Number` | 20 | 单位`px` |

### Slots
| 名称 | 说明  | 备注 |
|------|------|------|
| default | 内容 | - |