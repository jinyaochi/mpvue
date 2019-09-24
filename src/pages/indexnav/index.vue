<template>
  <div id="box">
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信手机号授权登陆</button>
    <button open-type="contact">进入客服会话</button>
    <button open-type="openSetting">打开授权设置页</button>
    <a href="/pages/map/main">打开地图</a>
    <a href="/pages/index/main">index2</a>
    <a href="/pages/mine/main">我的</a>
    <a href="/pages/online/main">线上试听</a>
    <a href="/pages/sign/main">登录</a>
    <a href="/pages/sign_subscribe/main">预约登录</a>
    <a href="/pages/school_details/main">校区详情</a>
    <a href="/pages/school_synopsis/main">校区简介</a>
    <a href="/pages/buy/main">我的购买</a>
    <a href="/pages/start/main">我的收藏</a>
    <a href="/pages/set/main">设置</a>
    <a href="/pages/service/main">联系客服</a>
    <a href="/pages/class_list/main">课程列表</a>

  </div>
</template>

<script>

export default {
  onLoad () {

  },
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
  a{ height: 50rpx;}

  .button-hover {
    background-color: red;
  }
  .other-button-hover {
    background-color: blue;
  }
</style>
