<template>
  <div class="mine-container">
    <van-nav-bar title="商城" :border="false"> </van-nav-bar>
    <div class="user-info">
      <div class="avator-phone">
        <div class="avator">头像</div>
        <div>
          <div>登录/注册</div>
          <div>暂无绑定手机号</div>
        </div>
      </div>
      <div class="right-arrow">></div>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon } from "vant";
export default {
  name: "ProfileMine",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  }
};
</script>

<style scoped>
.mine-container {
}
.user-info {
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
.avator {
  border: 1px solid #000;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  text-align: center;
  line-height: 60px;
  margin-right: 10px;
}
.avator-phone {
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>
