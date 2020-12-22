<template>
  <div class="goodsInfo">
    <div class="title">
      {{ goodsInfo.title }}
    </div>
    <div class="price-content">
      <div class="price" ref="price">
        {{ goodsInfo.price }}
      </div>
      <div
        class="old-price"
        :style="{ left: priceWidth + 2 + 'px' }"
        ref="oldPrice"
      >
        {{ goodsInfo.oldPrice }}
      </div>
      <div
        class="label-message"
        :style="{ left: priceWidth + oldPriceWidth + 5 + 'px' }"
        v-if="goodsInfo.discountDesc"
      >
        {{ goodsInfo.discountDesc }}
      </div>
    </div>
    <div class="shopInfo">
      <span v-for="(item, index) in goodsInfo.columns" :key="index">
        {{ item }}</span
      >
    </div>
    <div class="shopInfo2">
      <div v-for="(item, index) in goodsInfo.services" :key="index">
        <img
          :src="
            item.icon ||
              'https://s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'
          "
          alt=""
        />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      priceWidth: 0,
      oldPriceWidth: 0
    };
  },
  created() {},
  updated() {
    this.priceWidth = this.$refs.price.clientWidth;
    this.oldPriceWidth = this.$refs.oldPrice.clientWidth;
  },
  mounted() {
    // setTimeout(() => {
    //   this.$nextTick(() => {
    //     //1.获取价格以及原价格的宽度
    //     this.priceWidth = this.$refs.price.clientWidth;
    //     this.oldPriceWidth = this.$refs.oldPrice.clientWidth;
    //   });
    // }, 200);
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.goodsInfo {
  padding: 5px;
  border-bottom: 5px solid rgb(235, 232, 232);
}
.title {
  font-size: 20px;
  color: rgb(65, 58, 58);
}
.price-content {
  display: flex;
  margin-top: 5px;
  position: relative;
  margin-bottom: 20px;
}
.price {
  color: rgb(236, 129, 147);
  font-size: 20px;
  /* width: 70px; */
}
.old-price {
  text-decoration: line-through;
  font-size: 13px;
  color: gray;
  position: absolute;
  bottom: 0px;
}
.label-message {
  position: absolute;
  font-size: 15px;
  border-radius: 20px;
  background: rgb(247, 142, 159);
  color: white;
  padding: 2px;
}
.shopInfo {
  display: flex;
  justify-content: space-between;
  color: gray;
  padding-bottom: 13px;
  border-bottom: 1px solid rgb(221, 217, 217, 0.5);
}
.shopInfo2 {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.shopInfo2 img {
  width: 16px;
}
</style>
