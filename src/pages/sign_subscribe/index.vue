<template>
  <div class="sign">
    <div class="parent" @click="backto"></div>
    <div class="sign-font">
      <h1>预约体验课</h1>
      <p>能动英语清河店</p>
    </div>
    <div class="sign-input">
      <input class="phone" v-model="name" type="text" placeholder="姓名" placeholder-class="placeholder">
      <input class="phone" v-model="guard" type="text" placeholder="年级" placeholder-class="placeholder">
      <input class="phone" v-model="mobile" type="text" placeholder="手机号" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" v-model="code" type="text" placeholder="输入验证码" placeholder-class="placeholder">
        <span class="sign-get" @click="getcode">{{tips}}</span>
      </div>

    </div>
    <div class="sign-button" @click="appoint">立即预约</div>
  </div>

</template>

<script>
  import '@/assets/css/sign.css';



  export default {
  data () {
    return {
      tips: '获取验证码',
      name: '',
      guard: '',
      mobile: '',
      code: ''
    }
  },
  methods: {
    appoint(){
      let _this = this;
      _this.$net.post({
        url: 'appoint/1',
        data: {
          mobile:this.name,
          mobile:this.guard,
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
    backto(){
      wx.navigateBack({
        delta: 1
      })
    },
  },

  created () {
    // let app = getApp()
  }
}
</script>

