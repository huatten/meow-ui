## Collapse 折叠面板
### 功能说明
折叠面板组件, 通过折叠面板收纳内容区域。
### 使用指南
``` javascript
import { MCollapse } from "vue-meow-ui";
Vue.component(MCollapse.name, MCollapse);
```
### 代码演示
#### 基础用法
可以同时展开多个面板，面板之间不受相互影响
```html
 <mw-collapse>
  <mw-collapse-item title="鲁班七号">
    <div class="cont">鲁班七号是鲁班大师的天才机关造物，作为一个超远程射手，输出攻击能力自然十分不凡，强大的群体伤害，在团战之中更是无往不利。但因为不具备任何位移技能，团战中极度容易被敌方刺客盯上。想要操作好鲁班七号，站位和走位往往是非常重要的。</div>
  </mw-collapse-item>
  <mw-collapse-item title="宫本武藏">
    <div class="cont">宫本的玩法是在poke时寻找时机切入并击败敌方的核心输出，宫本比较依赖普攻，同时技能后可以为普攻增加海量物理伤害加成，百穿铭文可以帮助宫本伤害收益最大化，让宫本可以更好的利用技能配合普攻产生高额伤害。</div>
  </mw-collapse-item>
  <mw-collapse-item title="东皇太一">
    <div class="cont">东皇太一并不需要太高的AP来作为输出的资本，以血换血，以命搏命。保持自己的存活才能有输出，高额的血量和强壮的护甲魔抗才是东皇要追求的路线。团战前要时刻保证自己的高血量，限制高输出英雄，大招看似强大，却需要有谨慎释放的团战判断。</div>
  </mw-collapse-item>
  <mw-collapse-item title="上官婉儿">
    <div class="cont">她的祖父本来是前代皇帝的臣子，被派给废太子作为太傅。但没想到的是老来卷入废太子的谋反案，连累家人。男子发配充军，女子进入宫廷为奴。入宫时少女年仅四岁。而今许多年过去，亲人们相继离去，只剩孤苦的女孩慢慢长成。即使在书库里干着繁重的活计，她也每日里练习书法。这是身为书法名家的祖父传承给她的唯一纪念。</div>
  </mw-collapse-item>
</mw-collapse>
```
#### 手风琴模式
通过 `accordion` 属性设置 MCollapse 是否以手风琴模式展示。
```html
  <mw-collapse accordion>
    <mw-collapse-item title="鲁班七号">
      <div class="cont">鲁班七号是鲁班大师的天才机关造物，作为一个超远程射手，输出攻击能力自然十分不凡，强大的群体伤害，在团战之中更是无往不利。但因为不具备任何位移技能，团战中极度容易被敌方刺客盯上。想要操作好鲁班七号，站位和走位往往是非常重要的。</div>
    </mw-collapse-item>
    <mw-collapse-item title="宫本武藏">
      <div class="cont">宫本的玩法是在poke时寻找时机切入并击败敌方的核心输出，宫本比较依赖普攻，同时技能后可以为普攻增加海量物理伤害加成，百穿铭文可以帮助宫本伤害收益最大化，让宫本可以更好的利用技能配合普攻产生高额伤害。</div>
    </mw-collapse-item>
    <mw-collapse-item title="东皇太一">
      <div class="cont">东皇太一并不需要太高的AP来作为输出的资本，以血换血，以命搏命。保持自己的存活才能有输出，高额的血量和强壮的护甲魔抗才是东皇要追求的路线。团战前要时刻保证自己的高血量，限制高输出英雄，大招看似强大，却需要有谨慎释放的团战判断。</div>
    </mw-collapse-item>
    <mw-collapse-item title="上官婉儿">
      <div class="cont">她的祖父本来是前代皇帝的臣子，被派给废太子作为太傅。但没想到的是老来卷入废太子的谋反案，连累家人。男子发配充军，女子进入宫廷为奴。入宫时少女年仅四岁。而今许多年过去，亲人们相继离去，只剩孤苦的女孩慢慢长成。即使在书库里干着繁重的活计，她也每日里练习书法。这是身为书法名家的祖父传承给她的唯一纪念。</div>
    </mw-collapse-item>
  </mw-collapse>
```
#### 禁止点击
通过 `disabled` 属性设置 MCollapse 是否禁用不可点击。
```html
 <mw-collapse accordion>
    <mw-collapse-item title="鲁班七号">
      <div class="cont">鲁班七号是鲁班大师的天才机关造物，作为一个超远程射手，输出攻击能力自然十分不凡，强大的群体伤害，在团战之中更是无往不利。但因为不具备任何位移技能，团战中极度容易被敌方刺客盯上。想要操作好鲁班七号，站位和走位往往是非常重要的。</div>
    </mw-collapse-item>
    <mw-collapse-item title="宫本武藏" disabled>
      <div class="cont">宫本的玩法是在poke时寻找时机切入并击败敌方的核心输出，宫本比较依赖普攻，同时技能后可以为普攻增加海量物理伤害加成，百穿铭文可以帮助宫本伤害收益最大化，让宫本可以更好的利用技能配合普攻产生高额伤害。</div>
    </mw-collapse-item>
  </mw-collapse>
```
#### 默认显示某一项
通过 `open` 属性设置 MCollapse 某项是否展开。
```html
  <mw-collapse>
    <mw-collapse-item title="鲁班七号">
      <div class="cont">鲁班七号是鲁班大师的天才机关造物，作为一个超远程射手，输出攻击能力自然十分不凡，强大的群体伤害，在团战之中更是无往不利。但因为不具备任何位移技能，团战中极度容易被敌方刺客盯上。想要操作好鲁班七号，站位和走位往往是非常重要的。</div>
    </mw-collapse-item>
    <mw-collapse-item title="宫本武藏" open>
      <div class="cont">宫本的玩法是在poke时寻找时机切入并击败敌方的核心输出，宫本比较依赖普攻，同时技能后可以为普攻增加海量物理伤害加成，百穿铭文可以帮助宫本伤害收益最大化，让宫本可以更好的利用技能配合普攻产生高额伤害。</div>
    </mw-collapse-item>
    <mw-collapse-item title="东皇太一">
      <div class="cont">东皇太一并不需要太高的AP来作为输出的资本，以血换血，以命搏命。保持自己的存活才能有输出，高额的血量和强壮的护甲魔抗才是东皇要追求的路线。团战前要时刻保证自己的高血量，限制高输出英雄，大招看似强大，却需要有谨慎释放的团战判断。</div>
    </mw-collapse-item>
    <mw-collapse-item title="上官婉儿">
      <div class="cont">她的祖父本来是前代皇帝的臣子，被派给废太子作为太傅。但没想到的是老来卷入废太子的谋反案，连累家人。男子发配充军，女子进入宫廷为奴。入宫时少女年仅四岁。而今许多年过去，亲人们相继离去，只剩孤苦的女孩慢慢长成。即使在书库里干着繁重的活计，她也每日里练习书法。这是身为书法名家的祖父传承给她的唯一纪念。</div>
    </mw-collapse-item>
  </mw-collapse>
```

### Props 
| 属性 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| title | 标题 | `String` | - | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` | - |
| open | 面板开关 | `Boolean` | - | 控制某一项展开收起 |
| disabled | 是否禁用 | `Boolean` | `false` | - |

### Event
`@click(event)`