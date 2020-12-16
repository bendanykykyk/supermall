<template>
  <div>
    <template>
      <slide class="home-slide">
        <slide-item v-for="item in banners" :key="item.image">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </slide-item>
      </slide>
    </template>
  </div>
</template>

<script>
import { Slide, SlideItem } from "components/common/slideshow";
export default {
  name: "HomeSlideShow",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Slide,
    SlideItem
  }
};
</script>

<style>
.home-slide {
  background: wheat;
  height: 100px;
}
</style>
