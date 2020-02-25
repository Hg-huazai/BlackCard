// pages/home/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:[
      {day:"今天", time: "02.18"},
      { day: "周一", time: "02.19" },
      { day: "周二", time: "02.20" },
      { day: "周三", time: "02.21" },
      { day: "周四", time: "02.22" },
      { day: "周五", time: "02.23" },
      { day: "周六", time: "02.24" },
    ],
    current: 0
  },
  timetap(e){
    // console.log(e);
    this.setData ({
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