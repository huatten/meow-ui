<template>
  <div class="lazyload">
    <div class="scroller">
      <mw-lazy-load
        v-for="(item,i) in urls"
        :key="`${item.src}__${i}`"
        :src-placeholder="item.placeholder"
        :src="item.src"
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
      img: "http://www.abc.png"
    };
  },
  mounted() {
    let urls = [
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      },
      {
        placeholder:
          "https://avatars0.githubusercontent.com/u/15885749?s=460&u=8608625a6cbfd7681797a44c938b416be8f0388a&v=4",
        src:
          "https://avatars3.githubusercontent.com/u/10781715?s=400&u=3243dcedfd0b4e419a4894554e3e905edb0ad4ae&v=4"
      }
    ];
    this.urls = urls;
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