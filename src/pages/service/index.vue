<template>
  <div class="sign">
    <div class="parent" @click="backto"></div>
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
    <div class="sign-button sign-button-top" @click="appoint">立即提交</div><!-- 微信登陆 -->
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
  onLoad(){
      this.name = '';
      this.mobile = '';
      this.content = '';
  },
  methods: {
    backto(){
      wx.navigateBack({
        delta: 1
      })
    },
    appoint(){
      let _this = this;
      _this.$net.post({
        url: 'appoint/2',
        data: {
          name:this.name,
          mobile:this.mobile,
          content:this.content,
        }
      }).then(res => {
        if(!res.status){
          return wx.showToast({
            title: res.info,
            icon: 'none',
            duration: 2000
          })
        }
          wx.showToast({
              title: res.info,
              icon: 'none',
              duration: 2000
          })
          setTimeout(function () {
              _this.$location.backto(1);
          },1000);
      })
    },
  },

  created () {
    // let app = getApp()
  }
}
</script>

