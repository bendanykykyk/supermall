<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center
        ><span>购物车({{ $store.state.cartList.length }})</span></template
      >
    </nav-bar>
    <scroll class="content">
      <cart-goods-list></cart-goods-list>
    </scroll>
    <cart-settle></cart-settle>
  </div>
</template>

<script>
//* 公共组件导入
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
//* 导入子组件
import CartGoodsList from "./cartChild/CartGoodsList";
import CartSettle from "./cartChild/CartSettle";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartGoodsList,
    Scroll,
    CartSettle
  },
  created() {}
};
</script>

<style scoped>
.nav-bar {
  background: rgb(236, 149, 164);
  color: #fff;
}
.content {
  position: absolute;
  left: 0px;
  bottom: 49px;
  top: 44px;
  right: 0px;
  overflow: hidden;
}
</style>
