<template>
  <div id="home">
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
    <home-recommend :recommends="recommends" />

    <!--特性图-->
    <home-feature></home-feature>

    <!--控制条-->
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @title-click="titleClick"
    />

    <!--商品列表-->
    <goods-list :goodsList="showGoods"></goods-list>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
//* Home子组件导入
//todo:轮播图开发
// import HomeSlideShow from "./homeChild/HomeSlideShow";
import HomeRecommend from "./homeChild/HomeRecommend";
import HomeFeature from "./homeChild/HomeFeature";
//* 公共组件导入
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
//* 网络请求导入
import { getMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    // HomeSlideShow,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  created() {
    this.getMultiData();

    this.getHomeGoods("pop");

    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听的方法
     */
    titleClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**
     * 网络请求相关的方法
     */
    getMultiData() {
      getMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.nav-bar {
  background: var(--color-tint);
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.alterSlideShow {
  height: 120px;
  background: wheat;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
