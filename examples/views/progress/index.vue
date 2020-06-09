<template>
  <div class="progress">
    <section>
      <h5>基本用法</h5>
      <mw-progress v-model="base.value"></mw-progress>
    </section>
    <section>
      <h5>设置高度和百分比大小</h5>
      <mw-progress v-model="height.value" :height="height.height" :percentSize="height.fontSize"></mw-progress>
    </section>
    <section>
      <h5>设置圆角进度条</h5>
      <mw-progress v-model="circle.value" :round="circle.round"></mw-progress>
    </section>
    <section>
      <h5>更改进度条外观</h5>
      <mw-progress
        v-model="theme.value"
        :activeColor="theme.activeColor"
        :unactiveColor="theme.unactiveColor"
      ></mw-progress>
    </section>
    <section>
      <h5>开启进度条动画</h5>
      <mw-progress v-model="animate.value" :animate="animate.animate"></mw-progress>
    </section>
    <section>
      <h5>百分比内显并展示标题</h5>
      <mw-progress
        v-model="inner.value"
        :title="inner.title"
        :height="inner.height"
        :percent-position="inner.position"
      ></mw-progress>
    </section>
    <section>
      <h5>百分比上部显示并展示标题</h5>
      <mw-progress v-model="top.value" :title="top.title" :percent-position="top.position"></mw-progress>
    </section>
    <section>
      <h5>投票</h5>
      <div class="voteitem" v-for="(item,index) in votes" :key="index">
        <mw-progress
          v-model="item.value"
          :title="item.title"
          :activeColor="item.activeColor"
          percent-position="top"
        ></mw-progress>
      </div>
    </section>
    <section>
      <h5>修改百分比</h5>
      <mw-progress v-model="value" round animate percent-position="inner"></mw-progress>
      <mw-button type="danger" @click="percentMinus">减少</mw-button>
      <mw-button type="info" @click="percentPlus">增加</mw-button>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      base: {
        value: 40
      },
      height: {
        value: 50,
        height: 22,
        fontSize: 16
      },
      circle: {
        value: 55,
        round: true
      },
      theme: {
        value: 60,
        activeColor: "#07c160",
        unactiveColor: "#f3f3f3",
        animate: true
      },
      animate: {
        value: 50,
        animate: true
      },
      inner: {
        value: 70,
        height: 20,
        title: "Vite",
        position: "inner"
      },
      top: {
        value: 80,
        title: "JS",
        position: "top"
      },
      votes: [
        {
          title: "Vue",
          value: 80,
          activeColor: "#42b983"
        },
        {
          title: "React",
          value: 90,
          activeColor: "#61dafb"
        },
        {
          title: "Angular",
          value: 50,
          activeColor: "red"
        }
      ],
      value: 10
    };
  },
  methods: {
    percentPlus() {
      if (this.value < 100) {
        this.value += 10;
      }
    },
    percentMinus() {
      if (this.value > 0) {
        this.value -= 10;
      }
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.progress {
  background: #fff;
  padding: 24px;
}
section {
  margin-bottom: 50px;
  h5 {
    margin-bottom: 20px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  .voteitem {
    margin-bottom: 40px;
  }
}
</style>
