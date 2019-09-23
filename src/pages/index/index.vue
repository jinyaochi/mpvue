<template>
  <div>
    <div class="inContainer">
      <div class="logo"><img src="http://admin.qq.im/static/images/logo.png" alt="" mode="widthFix"></div>
      <div class="subject clearfix mb-35">
        <a class="image mt-10 mb-20" href="">
          <img src="http://admin.qq.im/static/images/index-img1.jpg" width="100%" height="100%" mode="widthFix"/>
        </a>
        <div class="font">
          <h1>单词记不住，会说不会写</h1>
          <div>
            <a href=""><span>1.2w</span><span class="icon love"></span></a>
            <a href=""><span>1.4 </span><span class="icon good"></span></a>
            <a href=""><span>100</span><span class="icon look"></span></a>
          </div>
        </div>
        <div class="head-img">
          <img src="http://admin.qq.im/static/images/head-img1.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img2.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img3.png" mode="widthFix" alt="">
        </div>

      </div>
      <div class="subject clearfix mb-35">
        <a class="image mt-10 mb-20" href="">
          <img src="http://admin.qq.im/static/images/index-img2.jpg" width="100%" height="100%" mode="widthFix"/>
        </a>
        <div class="font">
          <h1>单词记不住，会说不会写</h1>
          <div>
            <a href=""><span>1.2w</span><span class="icon love"></span></a>
            <a href=""><span>1.4 </span><span class="icon good"></span></a>
            <a href=""><span>100</span><span class="icon look"></span></a>
          </div>
        </div>
        <div class="head-img">
          <img src="http://admin.qq.im/static/images/head-img1.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img2.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img3.png" mode="widthFix" alt="">
        </div>

      </div>
      <div class="subject clearfix mb-35">
        <a class="image mt-10 mb-20" href="">
          <img src="http://admin.qq.im/static/images/index-img3.jpg" width="100%" height="100%" mode="widthFix"/>
        </a>
        <div class="font">
          <h1>单词记不住，会说不会写</h1>
          <div>
            <a href=""><span>1.2w</span><span class="icon love"></span></a>
            <a href=""><span>1.4 </span><span class="icon good"></span></a>
            <a href=""><span>100</span><span class="icon look"></span></a>
          </div>
        </div>
        <div class="head-img">
          <img src="http://admin.qq.im/static/images/head-img1.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img2.png" mode="widthFix" alt="">
          <img src="http://admin.qq.im/static/images/head-img3.png" mode="widthFix" alt="">
        </div>

      </div>

    </div>

    <bottomnav></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    bottomnav
  },


  created () {
    let app = getApp();
      this.$net.post({
          url: 'index',
          data: {}
      }).then(res => {

      })
  }
}

</script>
<style>








</style>
