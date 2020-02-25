// pages/member/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {all:"全部"},
      { all: "请使用" },
      { all: "全使用" },
      { all: "已退款" }
    ],
    current: 0
  },
  // 点击事件
  // allactive(e) {
  //   // var that = this
  //   // console.log(e);
    
  // },
  allactive(e) {
    // console.log(e)
    this.setData({
      current: e.currentTarget.dataset.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})