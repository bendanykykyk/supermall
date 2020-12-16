<template>
    <div class="tabBar">
      <slot></slot>
    </div>
</template>


<script>
export default {
  name: "Tabbar",
};
</script>

<style>
.tabBar {
  background: #f6f6f6;
  height: 3.125rem;
  width: 100%;
  position: fixed;
  left: 0rem;
  bottom: 0rem;
  display: flex;
  text-align: center;
  box-shadow: 0rem -0.0625rem 0.125rem #ccc;
}
</style>
