<template>
  <div class="rwm-box">
    <div class="parent" @click="backto"></div>
    <img class="rwm" :src="user.minicode" alt="" mode="widthFix">
  </div>

</template>

<script>
  import '@/assets/css/rwm.css';


  export default {
  onLoad(){
    let _this = this;
    _this.$net.post({
      url: 'user',
      data: {}
    }).then(res => {
      _this.user = res.data;
    })
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    backto(){
      wx.navigateBack({
        delta: 1
      })
    }

  }
}

</script>
<style>








</style>
