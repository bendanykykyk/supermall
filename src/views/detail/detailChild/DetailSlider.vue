<template>
  <div>
    <slider :autoplay="3000" class="slider">
      <slider-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" @load="loadImage" />
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "components/common/slider";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Slider,
    SliderItem
  },
  methods: {
    loadImage() {
      if (!this.isLoad) {
        this.$emit("loadImage");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
.slider {
  height: 300px;
}
</style>
