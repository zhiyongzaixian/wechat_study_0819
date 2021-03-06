// pages/list/list.js
// 引入模板数据
let listDatas = require('../../datas/list-data.js');
console.log(listDatas,  typeof listDatas);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [], // 列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新状态数据
    this.setData({
      listArr: listDatas.list_data
    })
  },

  // 跳转至detail的方法
  toDetail(event){
    // 需要获取点击模板的下标
    console.log(event)
    let index = event.currentTarget.dataset.index
    // 路由跳转传参的形式是query的形式url?key=index
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
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