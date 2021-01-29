module.exports = {
  plugins: {
    // ...
    "postcss-px-to-viewport": {
      // options
      unitToConvert: "px",
      viewportWidth: 375, //视窗的宽度，对应设计稿的宽度
      viewportHeight: 667, //视窗的高度，对应设计稿的高度
      unitPrecision: 5, //转化后的最小精度位数
      propList: ["*"],
      viewportUnit: "vw", //需要转化的视窗单位
      fontViewportUnit: "vw",
      selectorBlackList: [], //不需要转化的css类 ["tab-bar"]
      minPixelValue: 1, //意思是1及其以下不需要转化
      mediaQuery: false
      //   replace: true,
      //   exclude: undefined,
      //   include: undefined,
      //   landscape: false,
      //   landscapeUnit: "vw",
      //   landscapeWidth: 568
    }
  }
};
