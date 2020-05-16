<template>
  <div class="lazyload">
    <div class="scroller">
      <mw-lazy-load
        v-for="(item,i) in urls"
        :key="`${item.src}__${i}`"
        :src-placeholder="placeholder"
        :src="item"
        @load="lazyloads($event)"
      ></mw-lazy-load>
      <mw-lazy-load :src="img"></mw-lazy-load>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      urls: [],
      placeholder:
        "https://i0.hdslb.com/bfs/face/dd2042aed9a863af5dfb4430b1994aac31d6d03b.jpg@.webp",
      img: "www.abc.png"
    };
  },
  mounted() {
    let urls = [
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
      "https://user-gold-cdn.xitu.io/2018/12/20/167cacb92549ac63?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
    ];
    setTimeout(() => {
      this.urls = urls;
    }, 0);
  },
  methods: {
    lazyloads(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.lazyload {
  .scroller {
  }
  img {
    display: block;
    margin: 10px auto;
    width: 200px;
    height: 200px;
  }
}
</style>