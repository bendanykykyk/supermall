<template>
  <div class="detail-comment">
    <div class="comment-title">
      <div>用户评价{{ "(" + rate.cRate + ")" }}</div>
      <div>更多</div>
    </div>
    <div class="user" v-for="(item, index) in rate.list" :key="index">
      <div class="user-base-info">
        <img :src="item.user.avatar" class="user-logo" alt="" />
        <div class="username">{{ item.user.uname }}</div>
      </div>
      <div class="user-comment">
        <div class="user-goods-comment">
          {{ item.content }}
        </div>
        <div class="user-goods-comment-base">
          <span>{{ commentCreatedTime(item.created) }}</span>
          <span>{{ item.style }}</span>
        </div>
        <div class="comment-img-group">
          <img
            v-for="(pic, index) in item.images"
            :key="index"
            :src="pic"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailComment",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    //使用computed中的方法取代fliters
    commentCreatedTime() {
      return function(time) {
        return formatDate(new Date(time * 1000), "yyyy-MM-dd hh:mm:ss");
      };
    }
  }
};
</script>

<style scoped>
.detail-comment {
  padding: 20px;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(161, 160, 160, 0.3);
  height: 40px;
}
.user {
  margin-top: 10px;
}
.user-base-info {
  display: flex;
  align-items: center;
}
.user-base-info img {
  width: 55px;
  border-radius: 50px;
  margin-bottom: 10px;
}
.user-logo {
  margin-right: 10px;
}
.user-goods-comment {
  margin-bottom: 10px;
  color: gray;
}
.user-goods-comment-base {
  font-size: 14px;
}
.user-goods-comment-base span {
  margin-right: 10px;
}
.comment-img-group img {
  width: 60px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
