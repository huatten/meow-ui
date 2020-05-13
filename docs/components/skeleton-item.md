
## SkeletonItem 骨架屏可选项
### 功能说明
用于构建骨架屏的三种不同样式组件，可自己根据设计稿自行构建。
### 使用指南
``` js
import { MSkeletonItem } from "vue-meow-ui";
Vue.component(MSkeletonItem.name, MSkeletonItem);
```
### 代码演示
#### bar类型
```vue
<mw-skeleton-item></mw-skeleton-item>
<mw-skeleton-item :width="40" height="16"></mw-skeleton-item>
```

#### circle类型
```vue
 <mw-skeleton-item type="circle"></mw-skeleton-item>
 <mw-skeleton-item type="circle" :size="30"></mw-skeleton-item>
```

#### square类型
```vue
 <mw-skeleton type="square"></mw-skeleton>
 <mw-skeleton type="square" :size="30"></mw-skeleton>
```

### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| type | 可选类型 | `String` | bar | 可选值有：`circle`、`square` |
| width | bar宽度 | `Number` | 100 | 单位`%` |
| height | bar高度 | `Number` | 20 | 单位`px` |
| size | circle/square大小 | `Number` | 30 | 单位`px` |
