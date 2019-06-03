## Transition 动画
### 功能说明
动画切换组件, Vue内置transition的封装
### 使用指南
``` javascript
import { MTransition } from "vue-meow-ui";

Vue.component(MTransition.name, MTransition);
```
### 代码演示
#### 内置过渡动画
通过 `name` 属性设置动画类型，暂时动画如下：
* `mw-fade`（淡入淡出）
* `mw-fade-up`（底部弹出）
* `mw-fade-down`（顶部弹出）
* `mw-fade-left`（右侧弹出）
* `mw-fade-right`（左侧弹出）
* `mw-zoom`（由远及近放大）
* 待补充...