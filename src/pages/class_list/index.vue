<template>
  <div>
    <div class="parent" @click="backto"></div>
    <div class="class-img">
      <img src="http://admin.qq.im/static/images/buy-img.jpg" width="100%" height="100%" mode="widthFix"/>
    </div>

    <div class="class-head">
      <div class="class-one">
        <div>
          <p>{{category.name}}</p>
          <ul class="class-li">
            <li>
              <div class="class-li-zan love"></div>
              <div>{{category.collect}}</div>
            </li>
            <li>
              <div class="class-li-zan good"></div>
              <div>{{category.zan}}</div>
            </li>
            <li>
              <div class="class-li-zan look"></div>
              <div>{{category.view}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="class-two">
        <div>
          <p>{{category.price}}元/期</p>
          <div class="class-but">购买</div>
        </div>
      </div>
      <!--
      <p>286元/期</p>
          <div class="class-but">购买</div>
          -->
      <div class="inContainer">
        <ul class="map-shop">
          <li v-for="item in category.goods" :key="key" @click="todetail(item.id)">
            <img :src="item.cover" alt="">
            <div class="map-shop-font">
              <div>
                <h1>{{item.name}}</h1>
              </div>
              <p>{{item.intro}}</p>
              <div class="blue">{{item.pay}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <bottomnav :type="type"></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/class_list.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  onLoad(){
      var _this = this;
      _this.id = this.getQuery().id;
      this.$net.post({
          url: 'category/'+_this.id,
          data: {}
      }).then(res => {
          _this.category = res.data;
      })

  },
  data () {
    return {
        id:0,
        type:3,
        category:[],
    }
  },
  methods: {
    backto(){
      wx.navigateBack({
        delta: 1
      })
    },
      todetail(id){
          this.$location.navigate('/pages/video_details/main?id='+id);
      },
      getQuery() {
          /* 获取当前路由栈数组 */
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 1]
          const options = currentPage.options
          return options
      }
  },
  components: {
    bottomnav
  },
}

</script>
<style>








</style>
