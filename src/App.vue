<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
