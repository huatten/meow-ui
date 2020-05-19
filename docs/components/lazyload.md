
## LazyLoad 图片懒加载
### 功能说明
图片懒加载组件，可配置加载占位图、加载失败占位图，借鉴了 [vue-lazyload](https://github.com/hilongjw/vue-lazyload)，LazyLoad组件就是个简化版本。
### 使用指南
``` js
import { MLazyLoad } from "vue-meow-ui";
Vue.component(MLazyLoad.name, MLazyLoad);
```
### 代码演示
#### 基础用法
注意 `src` 、`placeholder` 和 `errorImg` 为必填项。
```vue
<div class="scroller">
  <mw-lazy-load
      v-for="(item,i) in imageList"
      :key="i"
      :src="item"
      :placeholder="placeholder"
      :error-img="errorImg"
   ></mw-lazy-load>
</div>
```

```js
 export default {
  data() {
    return {
      placeholder:
        "http://img.zcool.cn/community/011dce58edf49da8012049ef77cd07.gif",
   	  errorImg:     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853408504,331583678&fm=26&gp=0.jpg",
      imageList: [
        "https://images.pexels.com/photos/2286016/pexels-photo-2286016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2083940/pexels-photo-2083940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1123999/pexels-photo-1123999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1521370/pexels-photo-1521370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/209032/pexels-photo-209032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/205975/pexels-photo-205975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    };
  },
};
```
#### 启用 `IntersectionObserver` 模式
通过 `observer` 属性可以设置是否启用 `IntersectionObserver` api，注意兼容性问题。

```vue
 <div class="scroller">
  <mw-lazy-load
      v-for="(item,i) in imageList"
      :key="i"
      :src="item"
      :placeholder="placeholder"
      observe
      :error-img="errorImg"
   ></mw-lazy-load>
</div>
```
#### 启用 `picture` 新标签

通过 `usePicture` 属性可以设置是否启用 `Picture` HTML5新标签，注意兼容性问题。

```vue
<div class="scroller">
  <mw-lazy-load
      src="image-320w.jpg 320w, image-480w.jpg 480w"
      :placeholder="placeholder"
      use-picture                
      :error-img="errorImg"
   >
  	<source srcset="image-320w.jpg 320w, image-480w.jpg 480w" />
  </mw-lazy-load>
</div>
```

会被渲染成

```vue
<div class="scroller">
  <picture>
  	<source srcset="image-320w.jpg 320w, image-480w.jpg 480w" />
    <img src="image-320w.jpg 320w, image-480w.jpg 480w" />
  </picture>
</div>
```

####  图片加载 status

图片加载的时候会对外暴露四个状态 `loading` 、 `loaded` 、 `attempt` 、 `failed`  。

```vue
<img src="imgUrl" status="loading">
<img src="imgUrl" status="loaded">
<img src="imgUrl" status="attempt">
<img src="imgUrl" status="failed">
```
```css
<style>
  img[status=loading] {
    /*your style here*/
  }
  img[status=loaded] {
    /*your style here*/
  }
  img[status=error] {
    /*your style here*/
  }
</style>
```
### Props

| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| src | 图片地址 | `String` | - | 必填项 |
| placeholder | 未加载前的loading占位图 | `String` | - | 必填项 |
| errorImg | 容器宽度 | `String` | - | 自定义     |
| preLoadRate | 允许用户设定一个范围，当图片落在在屏幕尺寸的preLoadRate倍数范围内, 即发生加载 | `String` / `Number` | `1.3` | 倍数 |
| throttleTime | throttleTime时间内近允许触发一次加载 | `Number` | `200` | 节流函数 |
| attempt | 加载失败后, 尝试重试加载的次数 | `Number` | `3` | - |
| observer | 是否开启`IntersectionObserver`api | `Boolean` | `false` | 有兼容性 |
| intersectionOptions | `IntersectionObserver`api配置项 | `Object` | `false` | [Intersection Observer options ](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer) |
| usePicture | 是否渲染HTML5新标签 `picture` | `Boolean` | `false` | [picture](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture) |
| events | 监听最近的带滚动父元素事件, 触发即发生加载 | `Arrary` | `false` | ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'webkitAnimationend', 'webkitTransitionend', 'touchmove'] |

### Slots
| 名称 | 说明  | 备注 |
|------|------|------|
| default | 当使用 `picture` 标签时生效 | 用法看官方文档 |

### Event
| 事件调用 | 说明 | 参数 | 备注 |
|------|------|------|------|
| @loaded | 图片加载完毕时触发 | - | 返回图片地址、宽高、加载时间 |
| @attempt | 图片尝试重新加载时触发 | - | 返回图片地址、加载时间、event对象 |
| @failed | 图片加载失败时触发 | - | 返回图片地址、加载时间 |
