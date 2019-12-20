<template>
  <div>
    <!--- 苹果x适配 ----->
    <div class="tab-footer" :class="{'isIphoneX-class': isIphoneX}"></div>
    <!---------------->
    <div class="inContainer">
      <div class="buy-return" @click="backto">
        <img src="/static/images/return.png" alt="" mode="widthFix">
        我的收藏
      </div>

      <div class="subject clearfix mb-35" v-for="item in goods" :key="key" @click="todetail(item.id)">
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
        <div class="head-img delete"></div>
      </div>
      <div class="is-none" v-if="goods.length == 0">
        <img class="is-none-img" src="https://api.nd115.com/static/images/start-none.png" mode="widthFix"/>
      </div>
    </div>

    <bottomnav></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import '@/assets/css/start.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  data () {
    return {
        goods: [],
        isIphoneX: this.globalData.isIphoneX //适配iphonex
    }
  },
  mounted(){
      let _this = this;

      _this.$net.post({
          url: 'mycollect',
          data: {
          }
      }).then(res => {
          _this.goods = res.data;
      })
  },
  methods: {
      backto(index = 1){
          this.$location.backto(index);
      },
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
