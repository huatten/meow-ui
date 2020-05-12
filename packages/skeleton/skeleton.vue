<template>
  <div class="mw-skeleton" v-if="loading">
    <div class="mw-skeleton-avatar" v-if="avatar">
      <mw-skeleton-item type="circle" :size="avatarSize"></mw-skeleton-item>
    </div>
    <div class="mw-skeleton-content">
      <mw-skeleton-item v-if="title" class="mw-skeleton-title" type="bar" :width="titleWidth"></mw-skeleton-item>
      <mw-skeleton-item
        class="mw-skeleton-row"
        type="bar"
        v-for="item in rows"
        :key="item"
        :width="rowsWidth"
      ></mw-skeleton-item>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
const DEFUALT_TITLE_WIDTH = 40;
const DEFUALT_AVATAR_SIZE = 50;
const DEFUALT_WIDTH = 100;
export default {
  name: "mw-skeleton",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: 3
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarSize: {
      type: Number,
      default: DEFUALT_AVATAR_SIZE
    },
    title: {
      type: Boolean,
      default: false
    },
    titleWidth: {
      type: Number,
      default: DEFUALT_TITLE_WIDTH
    },
    rowsWidth: {
      type: Number,
      default: DEFUALT_WIDTH
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-skeleton {
  display: flex;
  box-sizing: border-box;
  &-content {
    flex: 1;
  }
  &-avatar{
    margin-right: 20px;
  }
  &-row {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-title {
    margin-bottom: 20px;
  }
}
</style>