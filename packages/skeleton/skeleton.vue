<template>
  <div class="mw-skeleton" v-if="loading">
    <div class="mw-skeleton-avatar" v-if="avatar">
      <mw-skeleton-item type="circle" :size="avatarSize"></mw-skeleton-item>
    </div>
    <div class="mw-skeleton-content">
      <mw-skeleton-item
        v-if="title"
        class="mw-skeleton-title"
        type="bar"
        :width="titleWidth"
        :height="rowsHeight"
      ></mw-skeleton-item>
      <mw-skeleton-item
        class="mw-skeleton-row"
        type="bar"
        v-for="item in rows"
        :key="item"
        :width="rowsWidth"
        :height="rowsHeight"
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
const DEFUALT_HEIGHT = 20;
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
    },
    rowsHeight: {
      type: Number,
      default: DEFUALT_HEIGHT
    }
  }
};
</script>
