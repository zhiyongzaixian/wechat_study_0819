// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '测试初始化数据'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this)
    // Vue: this.xxx = value
    // React: this.setState()
    // 小程序: this.setData()
    setTimeout(() => {
      // 注意点： 小程序中注意this指向问题
      this.setData({
        msg: '修改之后的值'
      })
    }, 2000)
  },

  // 事件的回调放置的位置同生命周期的钩子函数平级
  handleParent(){
    console.log('parent')
  },
  handleChild() {
    console.log('child')
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