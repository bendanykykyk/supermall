<template>
  <div class="detail-shop-info">
    <div class="shop-info">
      <div class="shop-logo">
        <img :src="shopInfo.shopLogo" alt="" />
      </div>

      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info-others">
      <div class="shop-left-content">
        <div>
          <div class="number">{{ shopInfo.cSells | sellCountFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div>
          <div class="number">{{ shopInfo.cGoods }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right-content">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td :class="{ better: item.isBetter, bad: !item.isBetter }">
              {{ item.score }}
            </td>
            <td
              :style="{ color: 'white' }"
              class="better-text1"
              :class="{ 'better-text': item.isBetter }"
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      scores: [
        { isBetter: false, name: "描述相符", score: 4.64 },
        { isBetter: true, name: "价格合理", score: 5 },
        { isBetter: false, name: "质量满意", score: 4.64 }
      ]
    };
  },
  filters: {
    //过滤销量
    sellCountFilter(counter) {
      const counterNum = parseInt(counter);
      return counterNum >= 10000
        ? (counterNum / 10000).toFixed(2) + "万"
        : counterNum;
    }
  }
};
</script>

<style scoped>
.shop-info {
  margin: 30px 0px 30px 10px;
  display: flex;
  align-items: center;
}
.shop-info .shop-logo {
  margin-right: 10px;
  border-radius: 50px;
}
.shop-info img {
  width: 50px;
  border-radius: 50px;
}
.shop-name {
  color: gray;
}
.shop-info-others {
  display: flex;
}
.shop-left-content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(207, 196, 196);
  flex: 1;
}
.shop-left-content .number {
  font-size: 24px;
  margin-bottom: 5px;
}
.shop-left-content .text {
  font-size: 12px;
}
.shop-right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.better {
  color: red;
}
.better-text1 {
  background: green;
}
.better-text {
  background: red;
}
.bad {
  color: green;
}
table {
  border-spacing: 5px 10px;
}
</style>
