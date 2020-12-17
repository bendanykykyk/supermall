<template>
  <div class="home-recommend">
    <div
      class="home-recommend-item"
      v-for="item in recommends"
      :key="item.image"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.home-recommend {
  display: flex;
  padding: 10px 0 30px 0;
  border-bottom: 10px solid #eee;
}
.home-recommend-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-recommend-item img {
  margin-bottom: 10px;
  width: 70px;
  height: 65px;
}
</style>
