<template>
  <div class="sign">
    <div class="service-logo">
      <img src="/static/images/service-logo.png" mode="widthFix" alt="">
    </div>
    <div class="sign-input">
      <input class="phone" type="text" v-model="name" placeholder="姓名" placeholder-class="placeholder">
      <div class="posit">
        <input class="phone" type="text" v-model="mobile" placeholder="手机号" placeholder-class="placeholder">
      </div>

      <textarea class="sign-textarea" v-model="content" placeholder="反馈问题" placeholder-class="placeholder"></textarea>

    </div>
    <div class="sign-button" @click="appoint">立即提交</div><!-- 微信登陆 -->
  </div>

</template>

<script>
  import '@/assets/css/sign.css';



  export default {
  data () {
    return {
      name: '',
      mobile: '',
      content: '',
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
  },

  created () {
    // let app = getApp()
  }
}
</script>

