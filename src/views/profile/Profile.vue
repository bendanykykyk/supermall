<template>
  <div>
    <profile-mine></profile-mine>
    <profile-cell></profile-cell>
  </div>
</template>

<script>
//vant

//子组件
import ProfileCell from "./profileChild/ProfileCell";
import ProfileMine from "./profileChild/ProfileMine";
export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    clickItem(e) {
      console.log(e.target.id);
    }
  },
  components: {
    ProfileCell,
    ProfileMine
  }
};
</script>

<style scoped></style>
