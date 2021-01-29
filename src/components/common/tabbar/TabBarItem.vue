<template>
  <div class="tabBar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div v-else>
      <slot name="item-img"></slot>
    </div>
    <!-- <div :class="{ active: isActive }"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    textColor: {
      type: String
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf(this.path) === -1) {
        this.$router.push(this.path);
      }
    }
  },
  computed: {
    isActive() {
      return !(this.$route.path.indexOf(this.path) === -1);
    },
    activeStyle() {
      return this.isActive ? { color: this.textColor } : {};
    }
  }
};
</script>

<style scoped>
.tabBar-item {
  flex: 1;
}
.tabBar-item img {
  width: 25px;
  height: 25px;
}
/* .active {
  color: red;
} */
</style>
