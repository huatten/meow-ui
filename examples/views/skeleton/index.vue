<template>
  <div class="skeleton">
    <section>
      <h5>bar类型</h5>
      <div class="block">
        <mw-skeleton-item></mw-skeleton-item>
      </div>
    </section>
    <section>
      <h5>circle类型</h5>
      <div class="block">
        <mw-skeleton-item type="circle"></mw-skeleton-item>
      </div>
    </section>
    <section>
      <h5>square类型</h5>
      <div class="block">
        <mw-skeleton-item type="square"></mw-skeleton-item>
      </div>
    </section>
    <section>
      <h5>基础默认</h5>
      <div class="block">
        <mw-skeleton></mw-skeleton>
      </div>
    </section>
    <section>
      <h5>显示标题</h5>
      <div class="block">
        <mw-skeleton title></mw-skeleton>
      </div>
    </section>
    <section>
      <h5>显示头像</h5>
      <div class="block">
        <mw-skeleton avatar></mw-skeleton>
      </div>
    </section>
    <section>
      <h5>加载组件</h5>
      <div class="block">
        <mw-skeleton avatar title :loading="loading">
          <div class="demo">
            <div class="demo-avatar">
              <mw-image
                circle
                width="50"
                height="50"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3b7yCNNOiGJYqTsHHHZBVnYw4H_JaAkp3BePtbv_gPn8n8SCT&usqp=CAU"
              ></mw-image>
            </div>
            <div class="demo-content">
              <div class="demo-title">送什么礼物好</div>
              <div class="demo-row">林深时见鹿，梦醒时见你，这款王丽坤同款的925纯银鹿角项链，非常别致啊，蓝色的宝石部分又增加了质感。</div>
            </div>
          </div>
        </mw-skeleton>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.skeleton {
  padding: 30px;
}
section {
  margin-bottom: 50px;
  h5 {
    margin-bottom: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  .block {
    background: #fff;
    padding: 30px 36px;
    border-radius: 3px;
    span {
      text-align: center;
      display: block;
      font-size: 26px;
      margin: 10px 0;
      color: #ccc;
    }
  }
  .demo {
    display: flex;
    box-sizing: border-box;
    &-content {
      flex: 1;
    }
    &-avatar {
      margin-right: 30px;
      width: 96px;
      height: 96px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    &-row {
      margin-bottom: 20px;
      font-size: 28px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-title {
      margin-bottom: 20px;
      font-size: 30px;
    }
  }
}
</style>