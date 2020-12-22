<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <div class="leftContent" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>

      <template slot="center">
        <div class="centerContent">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="centerItem"
            :class="{ active: currentIndex === index }"
            @click="ItemClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
//* 引入公共组件
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetaiNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  created() {},
  methods: {
    ItemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
    backClick() {
      this.$route && this.$router.back();
      // this.$router.history.back();
    }
  }
};
</script>

<style scoped>
.nav-bar {
  border-bottom: 1px solid #eee;
  position: relative;
  z-index: 11;
  background: #fff;
}
.leftContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.centerContent {
  display: flex;
}
.centerItem {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>
