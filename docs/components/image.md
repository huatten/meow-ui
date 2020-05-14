
## Image 图片展示
### 功能说明
图片容器组件，保留了原生img的特性，同时支持自定义占位符、加载失败等。
### 使用指南
``` js
import { MImage } from "vue-meow-ui";
Vue.component(MImage.name, MImage);
```
### 代码演示
#### 基础用法
基础用法与原生img标签一致，可以设置 `src`、`width`、`height` 等原生属性
```vue
 <mw-image width="100" height="100" alt="cat" :src="imgsrc"></mw-image>
```

#### 填充模式
通过 `fit` 属性可以设置图片填充模式，同原生 object-fit，用法可参考张鑫旭的 [文章](https://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/)。但是目前IE不支持，github上有个 [polyfill](https://github.com/anselmh/object-fit)，可辅助解决。
- **fill**: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。
- **contain**: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
- **cover**: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
- **none**: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
- **scale-down**: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。
```vue
 <mw-image width="100" height="120" :src="imgsrc" fit="contain"></mw-image>
```
#### 圆形图片
通过 `circle` 属性可以设置图片变圆。
```vue
  <mw-image circle width="100" height="100" :src="imgsrc"></mw-image>
```
#### 加载中占位
`Image` 组件提供了默认的加载中提示，支持通过 `loading` 插槽自定义内容
```vue
  <mw-image width="100" height="100">
    <template #loading>
      <mw-loading size="24" fill="#c8c9cc"></mw-loading>
    </template>
  </mw-image>
```
#### 加载失败占位
`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容
```vue
  <mw-image width="100" height="100" :src="imgErr">
    <template #error>
      <span>加载失败</span>
    </template>
  </mw-image>
```
### Props
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| src | 图片地址 | `String` | - | - |
| fit | 确定图片如何适应容器框 | `String` | - | fill / contain / cover / none / scale-down |
| width | 容器宽度 | `String` / `Number` | - | 单位默认 `px` |
| height | 容器宽度 | `String` / `Number` | - | 单位默认 `px` |
| circle | 是否显示圆形 | `Boolean` | `false` | - |
| show-loading | 是否显示图片加载中提示 | `Boolean` | `true` | - |
| show-error | 是否显示图片加载失败提示 | `Boolean` | `true` | - |

### Slots
| 名称 | 说明  | 备注 |
|------|------|------|
| loading | 自定义加载中占位 | - |
| error | 自定义加载失败占位 | - |

### Event
| 事件调用 | 说明 | 参数 | 备注 |
|------|------|------|------|
| @click | 点击图片时触发 | - | - |
| @load | 图片加载完毕时触发 | - | - |
| @error | 图片加载失败时触发 | - | - |
