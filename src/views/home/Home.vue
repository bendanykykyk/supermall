<template>
  <div>
    <!--导航-->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>

    <!--轮播图-->
    <!-- <home-slide-show :banners="banners"></home-slide-show> -->
    <div class="alterSlideShow"></div>

    <!--推荐-->
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
//* 组件导入
import NavBar from "components/common/navbar/NavBar";
//todo:轮播图开发
// import HomeSlideShow from "./homeChild/HomeSlideShow";
import HomeRecommend from "./homeChild/HomeRecommend";
//* 网络请求导入
import { getMultiData } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeRecommend
    // HomeSlideShow,
  },
  data() {
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: []
    };
  },
  created() {
    getMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.dKeywords = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.nav-bar {
  background: var(--color-tint);
  color: white;
}
.alterSlideShow {
  height: 120px;
  background: wheat;
}
</style>
