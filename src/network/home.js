import { request } from "./request";
//首页-获取多个信息
export function getMultiData() {
  return request({
    url: "home/multidata"
  });
}

//首页-获取商品信息
export function getHomeGoods(type, page) {
  return request({
    url: "home/data",
    params: {
      type,
      page
    }
  });
}
