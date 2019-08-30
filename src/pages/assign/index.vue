<template>
  <div id="box">
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信手机号授权登陆</button>
    <button open-type="contact">进入客服会话</button>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    <button open-type="openSetting">打开授权设置页</button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      markers: [{
        iconPath: '/static/images/jiantou.png',
        id: 0,
        callout: {
          content: '123123sd',
          display: 'ALWAYS'
        },
        longitude: 116.39987458203123,
        latitude: 39.90915359502086,
        width: 10,
        height: 10
      }],
      polyline: [{
        points: [{
          longitude: 116.39987458203123,
          latitude: 39.90915359502086
        }, {
          longitude: 116.42734040234373,
          latitude: 39.878598176249206
        }],
        color: '#FF00DD',
        width: 2,
        dottedLine: true
      }]
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
