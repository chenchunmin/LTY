// 获取应用实例
const app = getApp()
Page({
  data: {
    show: false,
    flag: 0,
  },
  immtransfer() {
    this.setData({
      show: true,
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  changeflag(e) {
    this.setData({
      flag: e.target.dataset.index
    })
  },
  // 转运须知
  transfer() {
    wx.navigateTo({
      url: '/pages/notify/notify',
    })
  },
  pagedown() {
    this.setData({
      show: false
    });
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  Copyaddress() {
    wx.navigateTo({
      url: '/pages/copy/copy',
    })
  },
  select(){
    console.log(11);
  }
})