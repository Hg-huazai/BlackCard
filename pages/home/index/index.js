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
    recommend:[
      { store: '推荐', popular: '热门商家'},
      { store: '优选', popular: '品质套餐' },
      { store: '晒单', popular: '达人推荐' },
      { store: '新店', popular: '上新好店' }
    ],
    currentIndexDate: 0,
    width: '',
    city: "阳江",
    height:'',
    totop: 0,
    current: 0

  },
  getPerson: function(e){
    console.log(e)
  },

  // 滚动出现置顶按钮
  scrollshow(e){
    // console.log(e)
    // console.log(e.detail.scrollTop);
    if(e.detail.scrollTop>600){
      this.setData({
        showtop: true
      })
    }else{
      this.setData({
        showtop: false
      })
    }
    // 推荐
    if (e.detail.scrollTop > 1400) {
      this.setData({
        float: true
      })
    } else {
      this.setData({
        float: false
      })
    }
  },
  // 点击回到顶部
  toTop:function (){
    this.setData({
      totop: 0
    })
  },

  // 点击推荐
  tapremmend (e){
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
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight
        })
        console.log(res);
      },
    })
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
    // console.log(e.currentTarget.dataset.index),
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
  foodscroll(e) {
    // console.log(e);
    // var that = this
    // this.setData({
    //   currentIndexDate:setInterval(function() {
    //     parseInt(e.detail.scrollLeft)
    //   }, 1000)
    // })
    console.log(e.detail.scrollLeft)
    
  }
  
})