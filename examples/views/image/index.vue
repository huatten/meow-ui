<template>
  <div class="image">
    <section>
      <h5>默认用法</h5>
      <div class="block">
        <mw-image width="100" height="100" :src="img"></mw-image>
      </div>
    </section>
    <section>
      <h5>填充模式-fill</h5>
      <div class="block">
        <mw-image width="100" height="120" :src="img" fit="fill"></mw-image>
      </div>
    </section>
    <section>
      <h5>填充模式-contain</h5>
      <div class="block">
        <mw-image width="100" height="120" :src="img" fit="contain"></mw-image>
      </div>
    </section>
    <section>
      <h5>填充模式-cover</h5>
      <div class="block">
        <mw-image width="100" height="120" :src="img" fit="cover"></mw-image>
      </div>
    </section>
    <section>
      <h5>填充模式-none</h5>
      <div class="block">
        <mw-image width="100" height="120" :src="img" fit="none"></mw-image>
      </div>
    </section>
    <section>
      <h5>填充模式-scale-down</h5>
      <div class="block">
        <mw-image width="100" height="120" :src="img" fit="scale-down"></mw-image>
      </div>
    </section>
    <section>
      <h5>圆角</h5>
      <div class="block">
        <mw-image circle width="100" height="100" :src="img"></mw-image>
      </div>
    </section>
    <section>
      <h5>图片加载中-默认</h5>
      <div class="block">
        <mw-image width="100" height="100"></mw-image>
      </div>
    </section>
    <section>
      <h5>图片加载中-自定义</h5>
      <div class="block">
        <mw-image width="100" height="100">
          <template #loading>
            <mw-loading size="24" fill="#c8c9cc"></mw-loading>
          </template>
        </mw-image>
      </div>
    </section>
    <section>
      <h5>图片加载失败-默认</h5>
      <div class="block">
        <mw-image width="100" height="100" :src="imgErr"></mw-image>
      </div>
    </section>
    <section>
      <h5>图片加载失败-自定义</h5>
      <div class="block">
        <mw-image width="100" height="100" :src="imgErr">
          <template #error>
            <span>加载失败</span>
          </template>
        </mw-image>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      img: "",
      imgErr: ""
    };
  },
  mounted() {
    this.$_init();
  },
  methods: {
    $_init() {
      setTimeout(() => {
        this.img = "data:image/jpeg;base64,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";
        this.imgErr =
          "https://i0.hdslb.com/bfs/face/dd2042aed9a863af5dfb4430b1994aac31d6d03b.jpg@.webp";
      }, 3000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.image {
  background: #fff;
  padding: 20px;
}
section {
  margin-bottom: 40px;
  .block {
    text-align: center;
    margin: 0 auto;
  }
  h5 {
    margin-bottom: 30px;
    text-align: center;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  span {
    font-size: 14px;
    color: #ccc;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.mw-image-img[status="loaded"] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
