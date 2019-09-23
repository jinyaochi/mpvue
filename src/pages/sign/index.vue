<template>
  <div class="sign">
    <div class="sign-logo">
      <img src="http://admin.qq.im/static/images/sign-logo.png" mode="widthFix" alt="">
    </div>
    <div class="sign-input">
      <input class="phone" type="text" placeholder="手机号" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" type="text" placeholder="输入验证码" placeholder-class="placeholder">
        <span class="sign-get">获取验证码</span>
      </div>
    </div>
    <div class="sign-button">立即登录</div><!-- 微信登陆 -->
    <div class="sign-button sign-button2">微信登陆</div><!-- 微信登陆 -->
  </div>

</template>

<script>
  import '@/assets/css/sign.css';



  export default {
  data () {
    return {

    }
  },
  methods: {

  },

  created () {
    // let app = getApp()
  }
}
</script>

