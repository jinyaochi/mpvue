<template>
  <div class="sign">
    <div class="sign-font">
      <h1>预约体验课</h1>
      <p>能动英语清河店</p>
    </div>
    <div class="sign-input">
      <input class="phone" type="text" placeholder="姓名" placeholder-class="placeholder">
      <input class="phone" type="text" placeholder="年级" placeholder-class="placeholder">
      <input class="phone" type="text" placeholder="手机号" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" type="text" placeholder="输入验证码" placeholder-class="placeholder">
        <span class="sign-get">获取验证码</span>
      </div>

    </div>
    <div class="sign-button">立即预约</div>
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

