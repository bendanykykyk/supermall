<template>
  <van-sidebar v-model="activeKey">
    <van-sidebar-item
      v-for="item in categoryList"
      :key="item.maitKey"
      :title="item.title"
      @click="clickSideBarItem"
    />
  </van-sidebar>
</template>

<script>
//vant
import { Sidebar, SidebarItem } from "vant";
export default {
  name: "CategorySideBar",
  data() {
    return {
      activeKey: 0
    };
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      }
    }
    // activeKey: {
    //   type: Number
    // }
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  methods: {
    clickSideBarItem(index) {
      this.$emit("clickSideBarItem", index);
    }
  }
};
</script>

<style scoped></style>
