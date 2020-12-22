<template>
  <div class="goods-list-item" @click="itemClick">
    <img
      :src="goodsItem.image || goodsItem.show.img"
      alt=""
      @load="loadImageRefresh"
    />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loadImageRefresh() {
      const path = this.$route.path;
      console.log(String(path).indexOf("/home"));
      //根据所处的路径，来使用事件总线 发射事件
      if (String(path).indexOf("/home") !== -1) {
        this.$bus.$emit("loadImageRefresh");
      } else if (path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailLoadImageRefresh");
      }
    },
    itemClick() {
      const itemId = this.goodsItem.iid || this.goodsItem.item_id;
      // console.log(itemId);
      // const path = this.$route.path;
      // console.log(String(path).indexOf("/home"));
      // //根据所处的路径，来使用事件总线 发射事件
      // if (path.indexOf("/detail") !== -1) {
      //   this.$bus.$emit("sendGoodsDetail", "1m7s9c4");
      // }

      this.$router.push({
        path: "/detail",
        query: {
          iid: itemId
        }
      });
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
}
.goods-list-item img {
  width: 100%;
}
.goods-info {
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 9;
}
.goods-info .price {
  margin-right: 20px;
  color: violet;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 1px / 14px 14px;
}
</style>
