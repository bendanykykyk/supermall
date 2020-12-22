<template>
  <div class="detail-bottom-bar">
    <div class="supporter">
      <img src="~assets/img/detail/icon01.png" alt="" />
      <div>客服</div>
    </div>
    <div class="shop">
      <img src="~assets/img/detail/icon02.png" alt="" />
      <div>店铺</div>
    </div>
    <div class="collect">
      <img src="~assets/img/detail/icon03.png" alt="" />
      <div>收藏</div>
    </div>
    <div class="addToCart">
      <span>加入购物车</span>
    </div>

    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar"
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;

  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #fff;
}
img {
  width: 24px;
}
.supporter {
  width: 15%;
}
.shop {
  width: 15%;
}
.collect {
  width: 15%;
}
.addToCart {
  width: 30%;
  height: 100%;
  line-height: 49px;
  background: yellow;
}
.buy {
  width: 25%;
  height: 100%;
  line-height: 49px;
  color: #fff;
  background: rgb(228, 132, 148);
}
</style>
