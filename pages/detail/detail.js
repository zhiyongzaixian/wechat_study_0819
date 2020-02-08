// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}, // 当前页面的数据对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options是空对象，如果有路由传参，name传参的数据会作为options键值对
    console.log('options', options)
    // 对应模块的下标
    let index = options.index
    // 更新detailObj的数据
    this.setData({
      detailObj: listDatas.list_data[index]
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