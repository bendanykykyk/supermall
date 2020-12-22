import { request } from "./request";
//首页-获取商品详情
export function getGoodsDetail(iid) {
  return request({
    url: "detail",
    params: {
      iid
    }
  });
}

//商品基本信息
export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}

//商铺信息对象
export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}
//商品参数对象
export class itemParam {
  constructor(itemParam) {
    this.info = itemParam.info;
    this.rule = itemParam.rule;
  }
}
// ----商品详情页 - 获取推荐数据 ---

export function getRecommends() {
  return request({
    url: "recommend"
  });
}
