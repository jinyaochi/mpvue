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
    <div class="sign-button sign-button2" @click="is_show=true">微信登陆</div><!-- 微信登陆 -->

    <alertchoose v-if="is_show" :message="message"></alertchoose>
  </div>

</template>

<script>
  import '@/assets/css/sign.css';
  import alertyes from '@/components/alert_yes.vue';
  import alertchoose from '@/components/alert_choose.vue';
  import alertfont from '@/components/alert_font.vue';

  export default {
  data () {
    return {
      parentmethod: 'wxlogin',
      message: '确定授权用户信息吗',
      mobile: '',
      is_show: false,
      tips: '获取验证码',
      code: ''
    }
  },
  components: {
      alertyes,
      alertchoose,
      alertfont
  },
  methods: {
    mobilelogin(){
      let _this = this;
      _this.$net.post({
        url: 'mobile/login',
        data: {
          mobile:_this.mobile,
          code:_this.code,
          member:mpvue.getStorageSync('member'),
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
  },

  created () {
    // let app = getApp()
  },
}
</script>

