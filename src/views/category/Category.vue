<template>
  <div class="category">
    <category-navbar></category-navbar>
    <div class="category-content">
      <scroll class="side-bar-container">
        <category-side-bar
          :categoryList="categoryList"
          @clickSideBarItem="clickSideBarItem"
        ></category-side-bar>
      </scroll>

      <scroll class="goodsList-container">
        <category-goods-list
          :currentGoodsList="currentGoodsList"
        ></category-goods-list>
      </scroll>
    </div>

    <!-- <scroll class="scroll"> </scroll> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Scroll from "components/common/scroll/Scroll";

//子组件
import CategoryNavbar from "./CategoryChild/CategoryNavbar";
import CategorySideBar from "./CategoryChild/CategorySideBar";
import CategoryGoodsList from "./CategoryChild/CategoryGoodsList";
//引入网络请求
import { getCategoryList, getSubcategory } from "network/category";
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      currentGoodsList: []
    };
  },
  components: {
    Scroll,
    CategoryNavbar,
    CategorySideBar,
    CategoryGoodsList
  },
  created() {
    this.getCategoryList();
  },
  mounted() {},
  // activated() {
  //   this.getCategoryList();
  // },
  methods: {
    getCategoryList() {
      getCategoryList().then(res => {
        this.categoryList = res.data.category.list;
        this.getSubcategory(0);
      });
    },
    clickSideBarItem(index) {
      // this.activeKey = index;
      this.getSubcategory(index);
    },
    getSubcategory(index) {
      let maitKey = this.categoryList[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.currentGoodsList = res.data.list;
      });
    }
  }
};
</script>

<style scoped>
.scroll {
  /* height: 100vh;
  width: 40px;
  background: coral; */
  /* overflow: hidden; */
}
.side-bar-container {
  position: absolute;
  top: 46px;
  left: 0;
  bottom: 50px;
  width: 80px;
  z-index: 8;
  overflow: hidden;
}
.goodsList-container {
  position: absolute;
  top: 46px;
  left: 80px;
  bottom: 50px;
  z-index: 8;
  overflow: hidden;
}
.category-content {
  display: flex;
}
.ul {
  width: 120px;
}
</style>
