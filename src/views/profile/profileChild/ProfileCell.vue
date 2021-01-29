<template>
  <div>
    <van-cell-group :border="false" class="grp1">
      <van-cell title="我的消息" icon="comment-o" />
      <van-cell title="积分商城" icon="bag-o" />
      <van-cell title="会员卡" icon="point-gift-o" />
    </van-cell-group>

    <van-cell-group :border="false">
      <van-cell title="我的购物车" icon="shopping-cart-o" />
      <van-cell title="下载购物APP" icon="down" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
export default {
  name: "ProfileCell",
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  }
};
</script>

<style scoped>
.grp1 {
  border-bottom: 5px solid rgb(233, 229, 229);
}
</style>
