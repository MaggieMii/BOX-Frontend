export default defineAppConfig({
  pages: [
    // 'pages/select/index',
    // 'pages/index/index',
    // 'pages/affirm/index',
    // 'pages/success/index',
    'pages/order/index',
    'pages/nearby/index',
    'pages/nearbySearch/index',
    'pages/nearbyDetail/index',
    'pages/nearbyPublish/index',
    'pages/store/index',
 
    'pages/mine/index',
    'pages/placeOrder/index',
 
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle:'custom'
  },
  tabBar: {
    backgroundColor:"#fff",
    color:"#707070",
    selectedColor:"#191919", 
    list: [
      {
        pagePath: "pages/store/index",
        text: "商城",
        iconPath: "./assets/images/食.png",
        selectedIconPath: "./assets/images/食.png"
      },
      {
        pagePath: "pages/nearby/index",
        text: "附近",
        iconPath: "./assets/images/附近.png",
        selectedIconPath: "./assets/images/附近.png"
      },
      {
        pagePath: "pages/order/index",
        text: "订单",
        iconPath: "./assets/images/订单.png",
        selectedIconPath: "./assets/images/订单.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./assets/images/我的.png",
        selectedIconPath: "./assets/images/我的.png"
      }
    ]
  }
})
