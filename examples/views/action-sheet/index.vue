<template>
  <div class="action-sheet">
    <section>
      <mw-button type="info" :inline="false" @click="demo1.show=true">基本</mw-button>
      <mw-action-sheet v-model="demo1.show" :actions="demo1.actions" @selected="selected"></mw-action-sheet>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="demo2.show=true">安卓风格</mw-button>
      <mw-action-sheet
        v-model="demo2.show"
        :actions="demo2.actions"
        :position="demo2.position"
        @selected="selected"
      ></mw-action-sheet>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="demo3.show=true">显示取消按钮</mw-button>
      <mw-action-sheet
        v-model="demo3.show"
        :show-cancel="demo3.showCancel"
        :actions="demo3.actions"
        @selected="selected"
      ></mw-action-sheet>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="demo4.show=true">显示选项状态</mw-button>
      <mw-action-sheet
        v-model="demo4.show"
        :show-cancel="demo4.showCancel"
        :actions="demo4.actions"
        @selected="selected"
      ></mw-action-sheet>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="demo5.show=true">使用header插槽</mw-button>
      <mw-action-sheet
        v-model="demo5.show"
        :show-cancel="demo5.showCancel"
        :actions="demo5.actions"
        @selected="$_delete"
      >
        <template slot="header">
          <div class="header">
            <h2>确定吗？</h2>
            <p>删除后就无法找回了呀</p>
          </div>
        </template>
      </mw-action-sheet>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      demo1: {
        show: false,
        actions: [
          {
            label: "设置备注和标签",
            value: 0
          },
          {
            label: "把他推荐给朋友",
            value: 1
          },
          {
            label: "加入黑名单",
            value: 2
          }
        ]
      },
      demo2: {
        show: false,
        position: "center",
        actions: [
          {
            label: "设置备注和标签",
            value: 0
          },
          {
            label: "把他推荐给朋友",
            value: 1
          },
          {
            label: "加入黑名单",
            value: 2
          }
        ]
      },
      demo3: {
        show: false,
        showCancel: true,
        actions: [
          {
            label: "设置备注和标签",
            value: 0
          },
          {
            label: "把他推荐给朋友",
            value: 1
          },
          {
            label: "加入黑名单",
            value: 2
          }
        ]
      },
      demo4: {
        show: false,
        showCancel: true,
        actions: [
          {
            label: "设置备注和标签",
            value: 0
          },
          {
            label: "把他推荐给朋友",
            value: 1,
            loading: true
          },
          {
            label: "加入黑名单",
            value: 2,
            disabled: true
          },
          {
            label: "删除",
            value: 3,
            color: "#f00"
          }
        ]
      },
      demo5: {
        show: false,
        showCancel: true,
        actions: [
          {
            label: "删除",
            value: "del",
            color: "#f00"
          }
        ]
      }
    };
  },
  methods: {
    selected(item) {
      this.$dialog({
        content: `${JSON.stringify(item)}`
      });
    },
    $_delete(item){
      if (item.value === "del") {
        this.$toast("删除成功");
      }
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
section {
  margin: 20px;
}
h5 {
  font-size: 30px;
  color: rgba(69, 90, 100, 0.6);
  margin: 30px 0 30px 20px;
}
.header {
  text-align: center;
  padding: 24px 0;
  h2 {
    font-size: 34px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  p {
    font-size: 26px;
    color: #666;
  }
}
</style>