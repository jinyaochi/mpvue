const rediect = function(url) {
  wx.redirectTo({
    url: url
  })
};
const navigate = function(url){
  wx.navigateTo({
    url: url
  })
};
const backto = function(index = 1){
  wx.navigateBack({
    delta: index
  })
};
export default {
  rediect,
  navigate,
  backto,
}
