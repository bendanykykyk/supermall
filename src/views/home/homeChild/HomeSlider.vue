<template>
  <div>
    <slider :autoplay="3000" class="slider">
      <slider-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="loadImage" />
        </a>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "components/common/slider";
export default {
  name: "HomeSlider",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    loadImage() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  },
  components: {
    Slider,
    SliderItem
  }
};
</script>

<style scoped></style>
