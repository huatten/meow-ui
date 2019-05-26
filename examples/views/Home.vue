<template>
  <div class="home">
    <mw-switch v-model="isClose"></mw-switch>
    <span><mw-icon name="done" :svg="true" size="33"></mw-icon></span>
    <span><mw-icon name="settings" size="30"></mw-icon></span>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      isClose: true
    }
  }
};
</script>
<style lang="scss" scoped>
span{
  color: red;
}
</style>

