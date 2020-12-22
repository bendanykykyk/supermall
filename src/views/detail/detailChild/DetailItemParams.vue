<template>
  <div class="detail-item-params" v-if="Object.keys(itemParams).length != 0">
    <div class="tables">
      <table v-for="(tables, index) in itemParams.rule.tables" :key="index">
        <tr v-for="(tr, indez) in tables" :key="indez">
          <td v-for="(td, indey) in tr" :key="indey">{{ td }}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <div class="key">{{ itemParams.info.key }}</div>
      <table>
        <tr v-for="(item, index) in itemParams.info.set" :key="index">
          <td class="item-key">{{ item.key }}</td>
          <td class="item-value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.key {
  margin-bottom: 10px;
}
tr {
  width: 100%;
  height: 40px;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
  color: rgb(126, 123, 123);
  margin-bottom: 20px;
}
.tables tr {
  border-bottom: 1px solid #ececec;
}
.item-key {
  width: 60px;
}
.item-value {
  color: rgb(241, 157, 171);
}
</style>
