<template>
  <div>
    <!--- 苹果x适配 ----->
    <div class="tab-footer" :class="{'isIphoneX-class': isIphoneX}"></div>
    <!---------------->
    <div class="inContainer">
      <div class="logo"><img src="http://admin.qq.im/static/images/logo.png" alt="" mode="widthFix"></div>

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

    <bottomnav :type="type"></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import bottomnav from '@/components/footer.vue';




  export default {
  onLoad(){
    let _this = this;
    _this.$net.post({
      url: 'index',
      data: {}
    }).then(res => {
      _this.lists = res.data;
    })
  },
  data () {
    return {
      type: 1,
      lists : [],
      isIphoneX: this.globalData.isIphoneX //适配iphonex
    }
  },
  methods: {
      todetail(id){
          this.$location.navigate('/pages/video_details/main?id='+id);
      },
  },
  components: {
    bottomnav
  }
}

</script>
<style>







</style>
