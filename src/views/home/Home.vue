<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style>
.nav-bar {
  background: pink;
  color: white;
}
</style>
