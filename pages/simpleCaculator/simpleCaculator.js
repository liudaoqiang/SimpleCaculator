var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "addNumValue1":"",
    "addNumValue2":"",
    "result":0
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

  /**
   * 处理被加数的事件绑定
   */
  handleAddNumValue1: function(event){
    var addNumValue1 = event.detail.value;
    if(!isNaN(addNumValue1)){
      this.setData({ "addNumValue1": addNumValue1 })
    }
  },

  /**
   * 处理加数的事件绑定
   */
  handleAddNumValue2: function (event) {
    var addNumValue2 = event.detail.value;
    if(!isNaN(addNumValue2)){
      this.setData({ "addNumValue2": addNumValue2 })
    }
  },

  /**
   * 显示计算结果
   */
  showcaculatorResult: function(event){
    console.log(event)
    var addNumValue1 = this.data.addNumValue1
    var addNumValue2 = this.data.addNumValue2
    var result = addNumValue1 * 1 + addNumValue2 * 1
    this.setData({"result": result});
  }
})