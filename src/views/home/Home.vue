<template>
  <div id="home">
    <!--导航-->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <tab-control
      class="tab-control2"
      :titles="['流行', '新款', '精选']"
      @title-click="titleClick"
      v-show="showTabControl"
      ref="tabControl2"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollContent"
      :probeType="3"
      :pullUpLoad="true"
      @loadMore="getHomeGoods(currentType)"
    >
      <!--轮播图-->
      <home-slider
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-slider>
      <!--推荐-->
      <home-recommend :recommends="recommends" />
      <!--特性图-->
      <home-feature></home-feature>
      <!--控制条-->
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @title-click="titleClick"
        ref="tabControl1"
      />
      <!--商品列表-->
      <goods-list :goodsList="showGoods"></goods-list>

      <!--轮播图-->
    </scroll>

    <!--在父组件中，引用的子组件标签上若想用原生事件，必须用.native 将子组件变成了普通的HTML标签-->
    <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
//* Home子组件导入
import HomeRecommend from "./homeChild/HomeRecommend";
import HomeFeature from "./homeChild/HomeFeature";
import HomeSlider from "./homeChild/HomeSlider";
//* 公共组件导入
import NavBar from "components/common/navbar/NavBar";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

//* 网络请求导入
import { getMultiData, getHomeGoods } from "network/home";
//* 公共函数导入
import { debounce } from "common/utils";
//* 混入导入
import { backTopMixin } from "common/mixin";

//vant
import { Toast } from "vant";

export default {
  name: "Home",
  components: {
    HomeRecommend,
    HomeFeature,
    NavBar,
    HomeSlider,
    TabControl,
    GoodsList,
    Scroll,
    [Toast.name]: Toast
  },
  mixins: [backTopMixin],
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
      currentType: "pop",

      tabControlOffsetTop: 0,
      saveY: 0
    };
  },
  created() {
    this.getMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("loadImageRefresh", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll && this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();
  },
  methods: {
    /**
     * 事件监听的方法
     */

    //根据下标值替换currentType的值
    titleClick(index) {
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      this.backToTabControl(0, -this.tabControlOffsetTop, 300);
    },
    backToTabControl(x, y, time) {
      this.$refs.scroll.scrollTo(x, y, time);
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },

    swiperImageLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
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
        // toast.clear();
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },

    showTabControl() {
      return Math.abs(this.position.y) >= this.tabControlOffsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.nav-bar {
  background: var(--color-tint);
  color: white;

  width: 100%;
}
.tab-control2 {
  position: relative;
  z-index: 9;
}
/* .alterSlideShow {
  height: 120px;
  background: wheat;
} */
/*
.tab-control {
  position: sticky;
  top: 44px;
} */
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
