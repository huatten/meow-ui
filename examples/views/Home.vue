<template>
  <div class="home">
    <m-switch v-model="isClose"></m-switch>
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
