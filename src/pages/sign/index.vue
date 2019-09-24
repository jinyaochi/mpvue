<template>
  <div class="sign">
    <div class="sign-logo">
      <img src="http://admin.qq.im/static/images/sign-logo.png" mode="widthFix" alt="">
    </div>
    <div class="sign-input">
      <input class="phone" type="text" v-model="mobile" placeholder="手机号" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" v-model="code" type="text" placeholder="输入验证码" placeholder-class="placeholder">
        <span class="sign-get" @click="getcode">{{tips}}</span>
      </div>
    </div>
    <div class="sign-button" @click="mobilelogin">立即登录</div><!-- 微信登陆 -->
    <div class="sign-button sign-button2">微信登陆</div><!-- 微信登陆 -->
  </div>

</template>

<script>
  import '@/assets/css/sign.css';



  export default {
  data () {
    return {
      mobile: '',
      tips: '获取验证码',
      code: ''
    }
  },
  methods: {
    mobilelogin(){
      let _this = this;
      _this.$net.post({
        url: 'mobile/login',
        data: {
          mobile:this.mobile,
          code:this.code,
        }
      }).then(res => {
        if(!res.status){
          return wx.showToast({
            title: res.info,
            icon: 'none',
            duration: 2000
          })
        }

        mpvue.setStorageSync('token', res.data.access_token)

        _this.$location.rediect('/pages/mine/main');
      })
    },
    getcode(){
      let _this = this;
      _this.$net.post({
        url: 'send/code',
        data: {mobile:this.mobile}
      }).then(res => {
        if(!res.status){
          return wx.showToast({
            title: res.info,
            icon: 'none',
            duration: 2000
          })
        }

        _this.tips = 59;

        let timer = setInterval(function () {
          _this.tips --;
        },1000);

        setTimeout(function () {
          clearTimeout(timer)
          _this.tips = '获取验证码';
        },59000);


      })
    },
    wxlogin(){
      var _this = this;
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          _this.$net.post({
            url: 'login',
            data: {
              'code': res.code
            }
          }).then(res => {
            mpvue.setStorageSync('token', res.data.access_token)
            mpvue.setStorageSync('openid', res.data.openid)
          })
        }
      })
    }

  },

  created () {
    // let app = getApp()
  }
}
</script>

