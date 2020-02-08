// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}, // 当前页面的数据对象
    isCollected: false, // 标识是否收藏，默认为false为未收藏
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
      detailObj: listDatas.list_data[index],
      index // 直接将index添加至data中，不需要初始化数据
    })


    // 读取本地缓存的数据
    let oldStorage = wx.getStorageSync('isCollected')
    // 判断当前页面是否被收藏，
    // 通过下标获取当前收藏的数据的结果： 1. true, 2: false(之前收藏后被取消收藏), 3: undefined(用户没有点击过收藏按钮)
    if(oldStorage[index]){ // 用户收藏了
      // 修改收藏的状态 isCollected 为true
      this.setData({
        isCollected: true
      })
    }


  },

  // 处理收藏功能的函数
  handleCollection(){
    // 1. 修改 isCollected 的状态值
    // 获取更新之后的状态
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })

    // 2. 显示消息提示框
    let title = isCollected?'收藏成功':'取消收藏'
    wx.showToast({
      title
    })

    // 3. 将 收藏的状态 缓存至storage中，页面再次加载的时候就从storage中读取状态并更新页面
    // 思路： {0: true, 1:false, 2: true}c1
    let index = this.data.index
    // 问题: 永远只有一个键值对
    // let obj = {}
    // 第一个存： {0: true}
    // 想要添加： 1: true, ---> {0: true, 1: true}
    // console.log('xxx', wx.getStorageSync('isCollected')) // 空串
    let obj = wx.getStorageSync('isCollected') || {}
    obj[index] = isCollected
    wx.setStorage({
      key: 'isCollected',
      data: obj
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