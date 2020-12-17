<template>
  <div>
    <div class="slide">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide"
};
</script>

<style scoped></style>
