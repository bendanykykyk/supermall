<template>
  <div id="detail">
    <detail-nav-bar
      ref="detailNavBar"
      class="nav-bar"
      @itemClick="itemClick"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-slider
        :topImages="topImages"
        @loadImage="loadImage"
      ></detail-slider>

      <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-images
        :detailInfo="detailInfo"
        @loadImage="loadImage"
      ></detail-goods-images>
      <detail-item-params
        :itemParams="itemParams"
        ref="detailItemParams"
      ></detail-item-params>
      <detail-comment :rate="rate" ref="detailComment"></detail-comment>
      <goods-list :goodsList="recommends" ref="goodsList"> </goods-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top></back-top>
  </div>
</template>

<script>
//* 引入子组件
import DetailNavBar from "./detailChild/DetailNavBar";
import DetailSlider from "./detailChild/DetailSlider";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
import DetailShopInfo from "./detailChild/DetailShopInfo";
import DetailGoodsImages from "./detailChild/DetailGoodsImages";
import DetailItemParams from "./detailChild/DetailItemParams";
import DetailComment from "./detailChild/DetailComment";
import DetailBottomBar from "./detailChild/DetailBottomBar";
//* 引入公共组件
import Scroll from "components/common/scroll/Scroll";
import { GoodsList, GoodsListItem } from "components/content/goods";
import BackTop from "components/content/backTop/BackTop";
//* 网络请求
import { getGoodsDetail, getRecommends } from "network/detail";
//*整合的对象
import { GoodsInfo, ShopInfo, itemParam } from "network/detail";
//* 公共函数导入
import { debounce } from "common/utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: 0,
      //商品详情信息
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      //推荐信息
      recommends: [],
      //其他
      itemOffsetTop: [],
      getThemeTopY: null
    };
  },
  components: {
    DetailNavBar,
    DetailSlider,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailGoodsImages,
    DetailItemParams,
    DetailComment,
    DetailBottomBar,
    Scroll,
    GoodsList,
    GoodsListItem,
    BackTop
  },
  created() {
    //1.存储路径iid值
    this.iid = this.$route.query.iid;
    //2.发送获取商品详情请求
    this.getGoodsDetail(this.iid);
    //3.发送获取推荐数据的请求
    this.getRecommends();

    //在组件创建的时候，赋值抖动函数给它
    this.getThemeTopY = debounce(() => {
      this.itemOffsetTop = [];
      this.itemOffsetTop.push(0);
      this.itemOffsetTop.push(this.$refs.detailItemParams.$el.offsetTop);
      this.itemOffsetTop.push(this.$refs.detailComment.$el.offsetTop);
      this.itemOffsetTop.push(this.$refs.goodsList.$el.offsetTop);
      // console.log(this.itemOffsetTop);
    }, 200);
  },
  mounted() {
    //如果在详情页点击了某推荐商品，应重新发送请求，这里通过事件总线完成，顺便要回到最高点
    // this.$bus.$on("sendGoodsDetail", res => {
    //   this.getGoodsDetail(res);
    // });
  },
  methods: {
    getGoodsDetail(iid) {
      getGoodsDetail(iid).then(res => {
        console.log("商品详情请求信息:", res);
        const data = res.result;
        //获取轮播图图片
        this.topImages = data.itemInfo.topImages;
        //创建商品信息对象
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo
        );
        //创建店铺对象
        this.shopInfo = new ShopInfo(data.shopInfo);
        //获取店铺详情图片
        this.detailInfo = data.detailInfo;
        //获取商品参数
        this.itemParams = new itemParam(data.itemParams);
        //用户评价
        this.rate = data.rate;
      });
    },
    getRecommends() {
      getRecommends().then(res => {
        this.recommends = res.data.list;
      });
    },
    loadImage() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    itemClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.itemOffsetTop[index], 300);
    },
    scroll(position) {
      const AbsPosition = -position.y;
      console.log(Math.ceil(AbsPosition));
      if (
        AbsPosition >= this.itemOffsetTop[1] &&
        AbsPosition < this.itemOffsetTop[2]
      ) {
        this.$refs.detailNavBar.currentIndex = 1;
      } else if (
        AbsPosition >= this.itemOffsetTop[2] &&
        AbsPosition < this.itemOffsetTop[3]
      ) {
        this.$refs.detailNavBar.currentIndex = 2;
      } else if (AbsPosition >= this.itemOffsetTop[3]) {
        this.$refs.detailNavBar.currentIndex = 3;
      } else {
        this.$refs.detailNavBar.currentIndex = 0;
      }
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background: #ffffff;
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 20;
  background: #ffffff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
