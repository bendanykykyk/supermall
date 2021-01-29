<template>
  <van-grid :column-num="3" class="grid-container" :gutter="0">
    <van-grid-item v-for="(item, index) in currentGoodsList" :key="index">
      <div class="img"><img :src="item.image" alt="" /></div>
      <span>{{ item.title }}</span>
    </van-grid-item>
  </van-grid>
</template>

<script>
//vant
import { Grid, GridItem } from "vant";
export default {
  name: "CategoryGoodsList",
  props: {
    currentGoodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
};
</script>

<style scoped>
.grid-container {
  flex: 1;
  height: 100%;
}

.img img {
  width: 50px;
  height: 50px;
}
</style>
