<template>
  <div>
    <div class="parent" @click="backto"></div>
    <div class="class-img">
      <img src="http://admin.qq.im/static/images/buy-img.jpg" width="100%" height="100%" mode="widthFix"/>
    </div>

    <div class="class-head">
      <div class="class-one">
        <div>
          <p class="center">第一期&nbsp;表音密码&nbsp;共10节</p>
        </div>
      </div>
      <div class="class-two">
        <div>
          <p>286元/期</p>
          <div class="class-but">购买</div>
        </div>
      </div>

    </div>

    <div class="class-footer">
      <div>总计&nbsp;&nbsp;<span>286</span> 元</div>
      <div>微信支付</div>
    </div>

  </div>

</template>

<script>
  import '@/assets/css/class_list.css';
  import '@/assets/css/buy_class.css';

  export default {
    data () {
      return {

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
