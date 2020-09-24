<template>
  <div class="infinite-scroll">
    <mw-infinite-scroll
      @onInfinite="onInfinite"
      @scrollChange="scrollChange"
      :has-more="isHasMore"
      :is-loading="isLoading"
    >
      <ul class="list">
        <li class="list-item" v-for="(item, index) of data" :key="item">{{ index + 1 }}</li>
      </ul>
    </mw-infinite-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      data: new Array(30),
      page: 2,
      num: 30,
      isHasMore: true,
      isNoData: false,
      isLoading: false,
      isErr: false,
      timer: null
    };
  },
  methods: {
    onInfinite() {
      this.isLoading = true;
      this.timer = setTimeout(() => {
        if (this.page <= 6) {
          this.data = new Array(this.num * this.page);
          this.page = this.page + 1;
        } else {
          this.isHasMore = false;
        }
        this.isLoading = false;
      }, 1000);
    },
    scrollChange(e) {
      console.log(e);
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.infinite-scroll {
  background: #fff;
  margin: 0;
  padding: 0 30px;
  .list {
    overflow: hidden;
  }
  .list-item {
    font-size: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 0;
    margin: 30px 0;
    border: 1px solid #f90;
    background: #e6e6e6;
    &:last-child {
      margin-bottom: 0;
    }
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
