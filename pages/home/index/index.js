// pages/home/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:[
      {week:'今天',time:'02月9日'},
      { week: '周一', time: '02月9日' },
      { week: '周二', time: '02月10日' },
      { week: '周三', time: '02月11日' },
      { week: '周四', time: '02月12日' },
      { week: '周五', time: '02月13日' },
      { week: '周六', time: '02月14日' }
    ],
    currentIndexDate: 0,
    width: ''

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

  },
  datetap(e) {
    console.log(e.currentTarget.dataset.index),
      this.setData({
        currentIndexDate: e.currentTarget.dataset.index,
        width: wx.getSystemInfoSync().windowWidth,
      })
  },
  // datetap (e) {
  //   console.log(2),
  //   this.setData ({
  //     currentIndexDate: e.currentTarget.dataset.index,
  //   }),
  //   this.foodscroll(function (e) {
  //     console.log(that);
  //   })
  // }

  
  // function datetap(){
  //   console.log(1)
  //   this.foodscroll()
  // },
  // datetap: function (e) {
  //   console.log(1)
  //   this.foodscroll()
  // },
  foodscroll(that) {
    console.log(that)
  }
})