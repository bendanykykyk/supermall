<template>
  <div class="cart-goods-list-item">
    <div class="left">
      <slot></slot>
      <div class="goods-pic">
        <img :src="cartGoodsListItem.detailImage" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="goods-title esptext">{{ cartGoodsListItem.title }}</div>
      <div class="goods-desc esptext">{{ cartGoodsListItem.title }}</div>
      <div class="right-bottom">
        <div class="goods-price">￥{{ cartGoodsListItem.price }}</div>
        <div class="goods-counter">X{{ cartGoodsListItem.counter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartGoodsListItem",
  props: {
    cartGoodsListItem: {}
  }
};
</script>

<style scoped>
.cart-goods-list-item {
  display: flex;
  border-bottom: 1px solid rgb(197, 191, 191);
  justify-content: center;
  align-items: center;
  height: 150px;
}
.goods-pic img {
  width: 100px;
}
.left {
  margin-left: 5px;
  margin-right: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.right .goods-title {
  font-size: 18px;
  width: 90%;
}
.esptext {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.right-bottom {
  display: flex;
  justify-content: space-between;
}
.goods-counter {
  margin-right: 10px;
}
</style>
