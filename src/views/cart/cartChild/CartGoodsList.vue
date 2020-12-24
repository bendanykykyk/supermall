<template>
  <div class="cart-goods-list">
    <div v-for="(item, index) in cartList" :key="index">
      <cart-goods-list-item :cartGoodsListItem="item"></cart-goods-list-item>
    </div>
  </div>
</template>

<script>
import CartGoodsListItem from "./CartGoodsListItem";
export default {
  name: "CartGoodsList",
  data() {
    return {};
  },
  components: {
    CartGoodsListItem
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style scoped></style>
