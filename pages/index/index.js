// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '测试初始化数据',
    userInfo: {}, // 用户信息
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this)
    // Vue: this.xxx = value
    // React: this.setState()
    // 小程序: this.setData()
    // setTimeout(() => {
    //   // 注意点： 小程序中注意this指向问题
    //   this.setData({
    //     msg: '修改之后的值'
    //   })
    // }, 2000)


    // 获取用户登录信息, 不会出现了，如果用户没有授权获取用户信息失败
    wx.getUserInfo({
      success: (msg) => {
        console.log('获取用户信息成功')
        console.log(msg.userInfo)
        // 将数据更新至data中
        this.setData({
          userInfo: msg.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败')
      }
    })

  },

  // getuserinfo的回调
  handleGetUserInfo(msg){
    console.log('用户点击了', msg)
    if(msg.detail.userInfo){// 用户点击的是允许
      // 将获取到的用户信息数据更新至data中
      this.setData({
        userInfo: msg.detail.userInfo
      })
    }
  },

  // 事件的回调放置的位置同生命周期的钩子函数平级
  // handleParent(){
  //   console.log('parent')
  // },
  // handleChild() {
  //   console.log('child')
  // },

  toList(){
    // 跳转至List页面
    console.log('xxx')
    wx.switchTab({
      url: '/pages/list/list'
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