<template>
  <div class="lazyload">
    <div class="scroller">
      <mw-lazy-load
        v-for="(item,i) in urls"
        :key="`${item}__${i}`"
        :placeholder="placeholder"
        :src="item"
        :error-img="errorImg"
        @loaded="lazyloads"
        @attempt="lazyError"
        @failed="lazyFailed"
      ></mw-lazy-load>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      urls: [
        "https://images.pexels.com/photos/2286016/pexels-photo-2286016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2083940/pexels-photo-2083940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1123999/pexels-photo-1123999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1521370/pexels-photo-1521370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/209032/pexels-photo-209032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/205975/pexels-photo-205975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1629061/pexels-photo-1629061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1046430/pexels-photo-1046430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1671850/pexels-photo-1671850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1630920/pexels-photo-1630920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3734866/pexels-photo-3734866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3912757/pexels-photo-3912757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3825031/pexels-photo-3825031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3512505/pexels-photo-3512505.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3807378/pexels-photo-3807378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3703310/pexels-photo-3703310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3629597/pexels-photo-3629597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3628818/pexels-photo-3628818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3472155/pexels-photo-3472155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3966887/pexels-photo-3966887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4278728/pexels-photo-4278728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3966864/pexels-photo-3966864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4215159/pexels-photo-4215159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4066273/pexels-photo-4066273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i0.hdslb.com/bfs/face/dd2042aed9a863af5dfb4430b1994aac31d6d03b.jpg@.webp",
        "https://images.pexels.com/photos/4065179/pexels-photo-4065179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4065169/pexels-photo-4065169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4035430/pexels-photo-4035430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4091683/pexels-photo-4091683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      placeholder:
        "http://img.zcool.cn/community/011dce58edf49da8012049ef77cd07.gif",
      errorImg:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853408504,331583678&fm=26&gp=0.jpg"
    };
  },
  methods: {
    lazyloads(e) {
      console.log(e);
    },
    lazyError(e) {
      console.log('attempt', e);
    },
    lazyFailed(e) {
      console.log('failed', e);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.lazyload {
  margin: 0;
  padding: 0;
  .scroller {
    height: 100%;
    overflow: scroll;
  }
  img {
    display: inline-block;
    vertical-align: top;
    width: 375px;
    height: 420px;
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
.mw-lazy-image[status="loaded"] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
