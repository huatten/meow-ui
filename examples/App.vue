<template>
  <div id="app" :class="{'in-iframe':inIframe}">
    <router-view class="examples-nav" name="nav" v-if="!inIframe" v-transition></router-view>
    <keep-alive include="home">
      <router-view class="examples" name="main" v-transition> </router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "App",
  data() {
    return {
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  }
};
</script>>
<style lang="scss" scoped>
* {
  -webkit-tap-highlight-color: transparent;
}
[v-cloak] {
  display: none;
}

#app {
  width: 100%;
  min-height: 100vh;
  padding-top: 105px;
  padding-bottom: 30px;
  box-sizing: border-box;
  &.in-iframe {
    padding-top: 0;
  }
}
h4 {
  padding: 0 8px;
  box-sizing: border-box;
}
.demo {
  padding: 0 8px 20px 8px;
}
</style>
