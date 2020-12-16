<template>
  <div>
    <tabbar>
      <tabBar-item path="/home" textColor="pink">
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tabBar-item>

      <tabBar-item path="/category" textColor="pink">
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tabBar-item>
      <tabBar-item path="/cart" textColor="pink">
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tabBar-item>

      <tabBar-item path="/profile" textColor="pink">
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tabBar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    TabBarItem
  }
};
</script>

<style></style>
