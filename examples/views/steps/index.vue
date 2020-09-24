<template>
  <div class="steps">
    <section>
      <h5>基础用法</h5>
      <div class="block">
        <mw-steps :steps="steps" :current="current"></mw-steps>
      </div>
    </section>
    <section>
      <h5>自定义步骤图标</h5>
      <div class="block">
        <mw-steps :steps="steps" :current="current">
          <template slot="icon" slot-scope="props">
            <b v-if="props.index === props.currentIndex">{{
              props.index + 1
            }}</b>
            <span v-else>{{ props.index + 1 }}</span>
          </template>
        </mw-steps>
      </div>
      <div class="block">
        <mw-steps :steps="steps" :current="current">
          <template slot="icon" slot-scope="props">
            <mw-icon
              v-if="props.index === props.currentIndex"
              name="collection"
              color="#ff8200"
            ></mw-icon>
            <mw-icon v-else name="next"></mw-icon>
          </template>
        </mw-steps>
      </div>
      <div class="block">
        <mw-steps :steps="steps" :current="2">
          <template slot="reached" slot-scope="props">
            <mw-icon
              name="selection"
              v-if="props.index === 1"
              color="#ff8200"
            ></mw-icon>
            <div class="step-node-default" v-else>
              <div class="step-node-default-icon"></div>
            </div>
          </template>
          <template slot="current">
            <mw-icon name="problem" color="#ff8200"></mw-icon>
          </template>
          <template slot="unreached">
            <mw-icon name="cancel"></mw-icon>
          </template>
        </mw-steps>
      </div>
    </section>
    <section>
      <h5>竖向步骤条两侧排列</h5>
      <div class="logistics">
        <mw-steps
          :steps="step"
          direction="vertical"
          adaptive
          arrange-left
          :current="stepCurrent"
        ></mw-steps>
      </div>
    </section>
    <section>
      <h5>竖向步骤条右侧排列</h5>
      <div class="logistics">
        <mw-steps
          :steps="step"
          direction="vertical"
          adaptive
          :current="stepCurrent"
        ></mw-steps>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          text: "实名认证",
        },
        {
          text: "绑定银行卡",
        },
        {
          text: "设置密码",
        },
        {
          text: "开户成功",
        },
      ],
      stepCurrent: 0,
      step: [
        { text: "已发货", desc: "2020.07.04" },
        { text: "上门提货", desc: "2020.07.05" },
        { text: "分拣验货", desc: "2020.07.06" },
        { text: "快件已到达【成都分拣中心】", desc: "2020.07.07" },
        {
          text: "快件从【成都转运中心】发往【华北转运中心】",
          desc: "2020.07.08",
        },
        {
          text: "快件已到达【华北转运中心】，即将发往【海淀区转运中心】",
          desc: "2020.07.09",
        },
      ],
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.current++;
      this.stepCurrent++;
      if (this.current > 3) {
        this.current = 0;
      }
      if (this.stepCurrent > 5) {
        this.stepCurrent = 0;
      }
    }, 2000 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.steps {
  padding: 20px 20px;
}
section {
  margin-bottom: 80px;
  h5 {
    color: rgba(69, 90, 100, 0.6);
    margin-bottom: 30px;
    font-size: 30px;
  }
  .block {
    margin-bottom: 40px;
    background-color: #fff;
  }
  .logistics {
    margin-bottom: 40px;
    background-color: #fff;
    padding-bottom: 60px;
    .mw-steps {
      height: 800px;
    }
  }
}
</style>
