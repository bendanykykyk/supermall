import Vue from "vue";
import VueRouter from "vue-router";

//懒加载
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/category", name: "Category", component: Category },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/detail", name: "Detail", component: Detail }
];
export default new VueRouter({
  routes
  // mode: "history"
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
