<template>
  <div id="box">
  <div class="parent"></div>
    <map
            id="map"
            :longitude="longitude"
            :latitude="latitude"
            scale="14"
            :markers="markers"
            @markertap="markertap"
            show-location="true"
    >

    </map>
    <div class="details-box">
      <div class="details-title title">
        <div class="title-center">距您5KM 共 3个分校</div>
      </div>

      <div class="details-content box-top">
        <ul class="map-shop">
          <li v-for="item in school" :key="kkk" @click="tomap(item.id)">
            <img :src="item.images[0]" alt="">
            <div class="map-shop-font">
              <div>
                <h1>{{item.name}}</h1>
                <span>1.2km</span>
              </div>
              <p>{{item.full_address}} {{item.location}}</p>
              <div class="details-botton">现在咨询</div>
              <div class="details-botton">预约体验</div>
            </div>
          </li>


        </ul>
      </div>
    </div>
    <bottomnav :type="type"></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/school_details.css';
  import '@/assets/css/map.css';

  import bottomnav from '@/components/footer.vue';


  export default {
    onLoad(){
      let _this = this;
      if(mpvue.getStorageSync('latitude')){
        _this.longitude = mpvue.getStorageSync('longitude')
        _this.latitude = mpvue.getStorageSync('latitude')
      }
    },
  data () {
    return {
      type: 2,//导航展示
      longitude: 116.39987458203123,
      latitude: 39.90915359502086,
      markers: [],
      school:[],
    }
  },
  methods: {

    markertap (e) {
      console.log(e)
    },
    tomap(id){
      console.log(id);
      this.markers = [{
        iconPath: 'http://admin.qq.im/static/images/jiantou.png',
        id: 0,
        callout: {
          content: '123123sd',
          display: 'ALWAYS'
        },
        longitude: 116.39987458203123,
        latitude: 39.90915359502086,
        width: 10,
        height: 10
      }];
      this.latitude = 39.90915359502086;
      this.longitude = 116.39987458203123;
    }

  },
    components: {
      bottomnav
    },
  created () {
    let _this = this;
    let app = getApp();

    this.$net.post({
      url: 'school',
      data: {}
    }).then(res => {
      _this.school = res.data;
    })
  }
}
</script>

