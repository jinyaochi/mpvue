<template>
  <div>
    <!--- 苹果x适配 ----->
    <div class="tab-footer" :class="{'isIphoneX-class': isIphoneX}"></div>
    <!---------------->
    <div class="inContainer">
      <div class="logo"><img src="https://api.nd115.com/static/images/logo.png" alt="" mode="widthFix"></div>

      <div v-for="(item, index) in lists" class="subject clearfix mb-35" @click="todetail(item.id)">
        <a class="image mt-10 mb-20" href="">
          <img :src="item.cover" width="100%" height="100%" mode="widthFix"/>
        </a>
        <div class="font">
          <h1>{{item.name}}</h1>
          <div>
            <a href=""><span>{{item.collect}}</span><span class="icon love"></span></a>
            <a href=""><span>{{item.zan}}</span><span class="icon good"></span></a>
            <a href=""><span>{{item.view}}</span><span class="icon look"></span></a>
          </div>
        </div>
        <div class="head-img">
          <img  v-for="(t, i) in item.viewer" :src="t.cover" mode="widthFix" alt="">
        </div>

      </div>

    </div>

    <bottomnav :type="type" :check="check"></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  mounted(){
    let _this = this;

    mpvue.setStorageSync('check',1)
    _this.check = 1;

    let member = this.getQuery().uid || 0;
      (member && mpvue.setStorageSync('member', member)) || mpvue.setStorageSync('member', null)
      _this.$net.post({
        url: 'index',
        data: {}
      }).then(res => {
        _this.lists = res.data;
        if(res.data.check){
          mpvue.setStorageSync('check',0)
          _this.check = 0
        }

      })
      _this.$net.post({
        url: 'user',
        data: {}
      }).then(res => {
        if(res.status){
          _this.islogin = 1;
        }else{
          _this.islogin = 0;
        }
      })
  },
  data () {
    return {
      type: 1,
      check: mpvue.getStorageSync('check'),
      islogin: 0,
      lists : [],
      isIphoneX: this.globalData.isIphoneX //适配iphonex
    }
  },
  methods: {
      todetail(id){
          this.$location.navigate('/pages/video_details/main?id='+id);
      },
      tologin(){
          this.$location.navigate('/pages/sign/main');
      },
      getQuery() {
          /* 获取当前路由栈数组 */
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 1]
          const options = currentPage.options
          return options
      },
  },
  components: {
    bottomnav
  },
    onShareAppMessage(){

    }
}

</script>
<style>







</style>
