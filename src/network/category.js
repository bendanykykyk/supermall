import { request } from "./request";
//获取分类列表
export function getCategoryList() {
  return request({
    url: "category"
  });
}

//获取分类列表下的商品
export function getSubcategory(maitKey) {
  return request({
    url: "/subcategory",
    method: "get",
    params: {
      maitKey
    }
  });
}
