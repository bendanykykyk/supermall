<template>
  <div class="cart-settle">
    <div class="totall">总计：￥{{ totallPrice }}</div>
    <div class="settle">去计算({{ totallCount }})</div>
  </div>
</template>

<script>
export default {
  name: "CartSettle",
  methods: {},
  computed: {
    totallPrice() {
      return this.$store.state.cartList
        .reduce((sum, x) => {
          return (sum += x.price * x.counter);
        }, 0)
        .toFixed(2);
    },
    totallCount() {
      return this.$store.state.cartList.reduce((sum, x) => {
        return (sum += x.counter);
      }, 0);
    }
  }
};
</script>

<style scoped>
.cart-settle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  position: fixed;
  bottom: 49px;
  background: rgb(224, 221, 221);
}
.totall {
  font-size: 18px;
}
.settle {
  background: rgb(224, 116, 14);
  color: #fff;
  height: 100%;
  line-height: 30px;
  width: 80px;
  text-align: center;
}
</style>
