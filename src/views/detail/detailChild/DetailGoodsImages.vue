<template>
  <div>
    <div class="des">{{ detailInfo.desc }}</div>
    <div
      class="detail-image"
      v-for="(item, index) in detailInfo.detailImage"
      :key="index"
    >
      <div class="key">{{ item.key }}</div>
      <div v-for="(image, index) in item.list" :key="index">
        <img :src="image" alt="" class="goods-image" @load="loadImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsImages",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loadImage() {
      this.$emit("loadImage");
    }
  }
};
</script>

<style scoped>
.des {
  color: gray;
  margin-bottom: 20px;
}
.key {
  color: black;
  margin-bottom: 10px;
}
.goods-image {
  width: 100%;
}
</style>
