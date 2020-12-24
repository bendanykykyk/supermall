import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex);

//2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = state.cartList.find(item => {
        return item.iid === payload.iid;
      });

      oldProduct
        ? (oldProduct.counter += 1)
        : (() => {
            payload.counter = 1;
            state.cartList.push(payload);
          })();
    }
  },
  actions: {
    // addToCart(context, payload) {
    //   context.commit("addCart", payload);
    // }
  },
  getters: {}
});
//3。导出，后挂载到main.js上
export default store;
