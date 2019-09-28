<template>
  <div>
    <div class="head-top">
      <div v-if="!user.id" @click="tologin">
        <div class="head-border"><img src="http://admin.qq.im/static/images/default.png" alt=""></div>
        <p>未登录</p>
      </div>
      <div v-if="user.id">
        <div><img :src="user.cover" alt=""></div>
        <p>{{user.nickname}}</p>
      </div>
    </div>
    <ul class="mine-choose">
      <li>
        <a href="/pages/start/main">
          <img src="http://admin.qq.im/static/images/mine-img1.png" alt="">我的收藏
        </a>
      </li>
      <li>
        <a href="/pages/buy/main">
          <img src="http://admin.qq.im/static/images/mine-img2.png" alt="">我的购买
        </a>
      </li>
      <li>
        <a href="/pages/service/main">
          <img src="http://admin.qq.im/static/images/mine-img3.png" alt="">联系客服
        </a>
      </li>
      <li>
        <a href="">
          <img src="http://admin.qq.im/static/images/mine-img4.png" alt="">我的二维码
        </a>
      </li>
      <li>
        <a href="/pages/set/main">
          <img src="http://admin.qq.im/static/images/mine-img5.png" alt="">设置
        </a>
      </li>
    </ul>

    <bottomnav :type="type"></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/mine.css';
  import bottomnav from '@/components/footer.vue';


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
        type:4,
        user: {}
      }
    },
    methods: {
      tologin(){
        this.$location.navigate('/pages/sign/main');
      }
    },
    components: {
      bottomnav
    },
    created () {
      // let app = getApp()
    }
  }
</script>

