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
export default {
  rediect,
  navigate
}
