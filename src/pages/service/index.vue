<template>
  <div class="sign">
    <div class="service-logo">
      <img src="/static/images/service-logo.png" mode="widthFix" alt="">
    </div>
    <div class="sign-input">
      <input class="phone" type="text" placeholder="姓名" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" type="text" placeholder="手机号" placeholder-class="placeholder">
      </div>

      <textarea class="sign-textarea" placeholder="反馈问题" placeholder-class="placeholder"></textarea>

    </div>
    <div class="sign-button sign-button-top">立即提交</div><!-- 微信登陆 -->
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

