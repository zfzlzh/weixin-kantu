//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    list:[],
    reco:[],
    grid: [{ pid: 1, img: "../img/grid/faxian.png", title: "发现", url:'../find/find' },
      { pid: 2, img: "../img/grid/tuijian.png", title: "推荐" },
      { pid: 3, img: "../img/grid/renqi.png", title: "今日人气" },
      { pid: 4, img: "../img/grid/zuixin.png", title: "最新" },
      { pid: 5, img: "../img/grid/tupian.png", title: "摄影" },
      { pid: 6, img: "../img/grid/shouji.png", title: "手机" },
      { pid: 7, img: "../img/grid/ren.png", title: "红人" },
      { pid: 8, img: "../img/grid/huodong.png", title: "活动" }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/index',
      success: (res) => {
       let {carousel,recommend}=res.data
       console.log(recommend)
       this.setData({
         list: carousel,
         reco: recommend
       })
      }
    })
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