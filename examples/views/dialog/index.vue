<template>
  <div class="dialog">
    <section>
      <mw-button type="info" :inline="false" @click="basic.show=true">基本</mw-button>
      <mw-dialog v-model="basic.show" :title="basic.title">正道的光，照在了大地上</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="close.show=true">显示关闭按钮</mw-button>
      <mw-dialog v-model="close.show" :title="close.title" :closable="close.closable" @close="close.confirm">正道的光，照在了大地上</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="confirm.show=true">确认操作</mw-button>
      <mw-dialog
        v-model="confirm.show"
        :title="confirm.title"
        :show-cancel="false"
        :confirm-text="confirm.confirmText"
      >种豆得瓜，种在了大腚上，来人，吊黄渤！</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="cancel.show=true">取消操作</mw-button>
      <mw-dialog
        v-model="cancel.show"
        :title="cancel.title"
        :show-confirm="false"
      >种豆得瓜，种在了大腚上，来人，吊黄渤！</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="transition.show=true">切换弹窗动画</mw-button>
      <mw-dialog
        v-model="transition.show"
        :title="transition.title"
        :transition="transition.transition"
      >种豆得瓜，种在了大腚上，来人，吊黄渤！</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="slot.show=true">插槽模式</mw-button>
      <mw-dialog v-model="slot.show" :content="slot.content">
        <div class="image" slot="header">
          <mw-image :src="slot.src" width="300" height="220"></mw-image>
        </div>
      </mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="color.show=true">更改按钮颜色</mw-button>
      <mw-dialog
        v-model="color.show"
        :title="color.title"
        :transition="color.transition"
        :cancel-color="color.cancelColor"
        :confirm-color="color.confirmColor"
      >种豆得瓜，种在了大腚上，来人，吊黄渤！</mw-dialog>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="asyncDialog.show=true">异步关闭</mw-button>
      <mw-dialog
        v-model="asyncDialog.show"
        :loading="asyncDialog.loading"
        :title="asyncDialog.title"
        :content="asyncDialog.content"
        :transition="asyncDialog.transition"
        :confirm-text="asyncDialog.confirmText"
        :cancel-text="asyncDialog.cancelText"
        @confirm="asyncDialog.asyncDel"
      ></mw-dialog>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      basic: {
        show: false,
        title: "标题",
      },
       close: {
        show: false,
        title: "显示关闭",
        closable: true,
        confirm: () => {
          this.$toast("关闭了");
        }
      },
      confirm: {
        show: false,
        title: "标题",
        confirmText: "确认操作",
        cancelText: ""
      },
      cancel: {
        show: false,
        title: "标题"
      },
      transition: {
        show: false,
        title: "标题",
        transition: "mw-zoom"
      },
      slot: {
        show: false,
        content: "我是一直短脚猫猫",
        src:
          "https://images.pexels.com/photos/2286016/pexels-photo-2286016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      color: {
        show: false,
        title: "更改按钮颜色",
        transition: "mw-zoom",
        cancelColor: "#ccc",
        confirmColor: "#ff5257"
      },
      asyncDialog: {
        show: false,
        title: "异步关闭",
        loading: false,
        content: "删除后将从记录里消失，无法找回",
        confirmText: "确定",
        cancelText: "手滑了",
        transition: "mw-zoom",
        asyncDel: () => {
          this.asyncDialog.loading = true;
          this.asyncDialog.confirmText = "删除中";
          setTimeout(() => {
            this.asyncDialog.loading = false;
            this.asyncDialog.confirmText = "确定";
            this.asyncDialog.show = false;
            this.$toast("删除成功！");
          }, 3000);
        }
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
section {
  margin: 20px;
}
</style>