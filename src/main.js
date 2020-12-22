//修改了一下
import Vue from "vue";
import App from "./App.vue";

import router from "./router";
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App), //生成VNode节点
  router
}).$mount("#app"); //渲染成真实的DOM组件，挂在到根节点上
