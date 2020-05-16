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
        this.img =
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4";
        this.imgErr = "x";
      }, 3000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.image {
  background: #fff;
  padding: 20px 0;
}
section {
  margin: 20px auto;
  .block {
    width: 100px;
    margin: 0 auto;
  }
  h5 {
    margin-bottom: 15px;
    text-align: center;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
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
.mw-image-img[status=loaded] {
  
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

</style>