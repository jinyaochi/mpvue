<template>
  <div id="box">
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信手机号授权登陆</button>
    <button open-type="contact">进入客服会话</button>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    <button open-type="openSetting">打开授权设置页</button>
    <a href="/pages/map/main">打开地图</a>

  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

    begin ({timeStamp}) {
      console.log('innnn')
    },
    markertap (e) {
      console.log(e)
    },
    getPhoneNumber (e) {
      console.log('12222222222323')
    }

  },

  created () {
    // let app = getApp()
  }
}
</script>
<style>
  .button-hover {
    background-color: red;
  }
  .other-button-hover {
    background-color: blue;
  }
</style>
