<template>
  <ul class="mw-pagination" :class="{'simple': simple}">
    <li
      class="mw-pagination-item mw-hairline prev"
      :class="{'disabled': isPrev}"
      @click="!isPrev && select(value - 1)"
    >{{prevText}}</li>
    <template v-if="!simple">
      <li
        class="mw-pagination-item mw-hairline page"
        :class="{'active': page.active}"
        v-for="(page, index) in pages"
        :key="index"
        @click="select(page.value)"
      >{{page.text}}</li>
    </template>
    <template v-else>
      <li class="mw-pagination-desc">
        <slot
          v-if="$scopedSlots.desc || $slots.desc"
          name="desc"
          :curPage="value"
          :pageCount="count"
          :total="total"
        ></slot>
        <span v-else>{{value}}/{{count}}</span>
      </li>
    </template>
    <li
      class="mw-pagination-item mw-hairline next"
      :class="{'disabled': isNext}"
      @click="!isNext && select(value + 1)"
    >{{nextText}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-pagination",
  props: {
    // 当前页码
    value: {
      type: Number,
      default: 0,
    },
    // 回退文案
    prevText: {
      type: String,
      default: "上一页",
    },
    // 前进文案
    nextText: {
      type: String,
      default: "下一页",
    },
    // 总条目数
    total: {
      type: [Number, String],
      default: 0,
    },
    // 总页数 => 计算得到
    pageCount: {
      type: [Number, String],
      default: 0,
    },
    // 每页记录数
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    // 页面中可见页码数
    showPageSize: {
      type: [Number, String],
      default: 5,
    },
    // 页码模式
    simple: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value: {
      handler(val) {
        this.select(val || this.value);
        this.checkStatus();
      },
      immediate: true,
    },
  },
  computed: {
    descSlot() {
      return !!this.$slots.desc;
    },
    count() {
      const count = this.pageCount || Math.ceil(this.total / this.pageSize);
      return Math.max(1, count);
    },
    pages() {
      const makePage = (value, text, active) => {
        return { value, text, active };
      };

      const pages = [];
      const pageCount = this.count;
      const showPageSize = +this.showPageSize;

      if (this.simple) {
        return pages;
      }

      // 默认的页码限制
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;

      // 重置
      if (isMaxSized) {
        startPage = Math.max(this.value - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1;

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }

      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === this.value);
        pages.push(page);
      }

      if (isMaxSized && showPageSize > 0) {
        if (startPage > 1) {
          const previousPageSet = makePage(startPage - 1, "···", false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          const nextPageSet = makePage(endPage + 1, "···", false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    },
  },
  data() {
    return {
      isPrev: false,
      isNext: false,
    };
  },
  methods: {
    select(page, emitChange = true) {
      page = Math.min(this.count, Math.max(1, page));
      if (this.value !== page) {
        this.$emit("input", page);
        if (emitChange) {
          this.$emit("change", page);
        }
      }
    },
    checkStatus() {
      this.isPrev = this.value === 1;
      this.isNext = this.value === this.count;
    },
  },
};
</script>
