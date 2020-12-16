<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="titleClick(index)"
    >
      <span :class="{ active: isActive(index) }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["1", "2", "3"];
      }
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("title-click", this.currentIndex);
    },
    isActive(index) {
      return index === this.currentIndex;
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 2px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
/* .active span {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
} */
</style>
