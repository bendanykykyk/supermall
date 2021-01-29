//修改了一下
import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
//添加事件总线对象
Vue.prototype.$bus = new Vue();
//添加图片懒加载依赖
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  loading: require("assets/img/common/placeholder.jpg")
});

new Vue({
  render: h => h(App), //生成VNode节点
  router,
  store
}).$mount("#app"); //渲染成真实的DOM组件，挂在到根节点上
