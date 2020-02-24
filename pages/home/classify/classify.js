// pages/home/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Popular: [
      { classify: "热门分类", status: 1 },
      { classify: "美食", status: 2 },
      { classify: "咖啡饮品", status: 3 },
      { classify: "丽人", status: 4 },
      { classify: "电影", status: 5 },
      { classify: "网吧网咖", status: 6 }
    ],
    foods: [
      { img:'../../../static/img/home/classify/images/foods_03.png',name:'饮品店1',status:1},
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '咖啡店1', status: 1 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店2', status: 2 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店2', status: 2 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店3', status: 3 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店1', status: 1 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店4', status: 4 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店4', status: 4 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店1', status: 1 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店5', status: 5 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店1', status: 1 },
      { img: '../../../static/img/home/classify/images/foods_03.png', name: '饮品店6', status: 6 },
    ],
    popular: 0,
    status: 1,
    list: '',
    tbody:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const food = this.data.foods.filter(function (item) {
    //   return item.status === 1;
    // })
    // this.setData({
    //   list: food
    // })
    this.activepopular(1)
    // console.log(a);

    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          tbody: res.windowHeight
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
  activepopular (e){
    // console.log(e);
    // 第一种
    var a
    var popular
    // if (e.target.dataset.status){
    //   a = e.target.dataset.status
    // }else {
    //   a=e
    // }
    // 第二种
    // var a = e.target.dataset.status || e
    // 第三种
    if (typeof e === 'number') { a = e, popular = 0 } else { a = e.target.dataset.status, popular=e.target.dataset.index }
    // const that = this
    const food = this.data.foods.filter(function(item) {
      return item.status === a;
    })
    // console.log(food)
    this.setData({
      // popular: e.target.dataset.index,
      popular,
      // status: e.target.dataset.status,
      list: food
    })
  }
})