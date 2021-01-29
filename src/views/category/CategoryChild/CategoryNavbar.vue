<template>
  <van-nav-bar>
    <template v-slot:title>
      <span class="navbar-title">商品分类</span>
    </template>
  </van-nav-bar>
</template>

<script>
//vant
import { NavBar } from "vant";
export default {
  name: "CategoryNavbar",
  components: {
    [NavBar.name]: NavBar
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #eb8596;
}
.navbar-title {
  color: white;
}
</style>
