<template>
  <div>
    <div class="head-top">
      <div v-if="!user.id" @click="tologin">
        <div class="head-border"><img src="https://api.nd115.com/static/images/default.png" alt="" mode="widthFix"></div>
        <p>未登录</p>
      </div>
      <div v-if="user.id">
        <div><img :src="user.cover" alt=""></div>
        <p>{{user.nickname}}</p>
      </div>
    </div>
    <ul class="mine-choose">
      <li v-if="!check">
        <a href="/pages/start/main">
          <img class="icon-1" src="https://api.nd115.com/static/images/mine-img1.png" alt="">我的收藏
        </a>
      </li>
      <li v-if="!check">
        <a href="/pages/buy/main">
          <img class="icon-2" src="https://api.nd115.com/static/images/mine-img2.png" alt="">我的购买
        </a>
      </li>
      <li>
        <a href="/pages/service/main">
          <img class="icon-3" src="https://api.nd115.com/static/images/mine-img3.png" alt="">联系客服
        </a>
      </li>
      <li v-if="user && user.minicode">
        <a href="/pages/rwm/main">
          <img class="icon-4" src="https://api.nd115.com/static/images/mine-img4.png" alt="">我的二维码
        </a>
      </li>
      <li>
        <a href="/pages/set/main">
          <img class="icon-5" src="https://api.nd115.com/static/images/mine-img5.png" alt="">设置
        </a>
      </li>
    </ul>

    <bottomnav :type="type" :check="check"></bottomnav>
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
      _this.check = mpvue.getStorageSync('check')*1;
    },
    data () {
      return {
        type:4,
        check: 1,
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

