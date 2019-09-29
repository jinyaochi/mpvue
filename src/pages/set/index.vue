<template>
  <div>
    <div class="set-head"></div>
    <ul class="set-box">
      <li @click="qingchu">清除缓存</li>
      <li @click="logout">退出登录</li>
    </ul>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import '@/assets/css/set.css';

export default {
  methods: {
    logout(){
      let _this = this;
      mpvue.setStorageSync('token', '')
      wx.showToast({
        title: '退出成功',
        icon: 'success',
        duration: 2000
      })

      setTimeout(function () {
        _this.$location.rediect('/pages/mine/main')
      },1100)
    },
    qingchu(){
      let _this = this;
      wx.showToast({
        title: '清除成功',
        icon: 'success',
        duration: 2000
      })

      setTimeout(function () {
        _this.$location.rediect('/pages/mine/main')
      },1100)
    }
  },
}

</script>
<style>








</style>
