<template>
  <div id="box">
  <div class="parent" @click="backto"></div>
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
        <div class="title-center">距您&nbsp;10KM&nbsp;共&nbsp;{{nearnum}}&nbsp;个分校</div>
      </div>

      <div class="details-content box-top">
        <ul class="map-shop">
          <li v-for="item in school" :key="kkk">
            <img :src="item.images[0]" alt="" @click="tomap(item.lat,item.lng)">
            <div class="map-shop-font">
              <div @click="todetail(item.id)">
                <h1>{{item.name}}</h1>
                <span>{{item.distence}}km</span>
              </div>
              <p @click="tomap(item.lat,item.lng)">{{item.full_address}} {{item.location}}</p>
              <button class="details-botton call_btn" open-type="contact">现在咨询</button>
              <div class="details-botton" @click="toyuyue(item.id)">预约体验</div>
            </div>
          </li>


        </ul>
      </div>
    </div>
    <bottomnav :type="type"></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/map2.css';
  import '@/assets/css/map.css';

  import bottomnav from '@/components/footer.vue';

  export default {
    onLoad(){
      let _this = this;
      if(mpvue.getStorageSync('latitude')){
        _this.longitude = mpvue.getStorageSync('longitude')
        _this.latitude = mpvue.getStorageSync('latitude')
      }
      this.$net.post({
          url: 'school',
          data: {
              longitude:_this.longitude,
              latitude:_this.latitude,
          }
      }).then(res => {
          _this.school = res.data;
          _this.nearnum = 0;

          for(var s in _this.school){
              if(_this.school[s].distence <= 10){
                  _this.nearnum++;
              }
              _this.markers[s] = {
                  iconPath: 'http://api.qq.im/static/images/details-pisition.png',
                  id: _this.school[s].id,
                  callout: {
                      content: _this.school[s].name,
                      display: 'ALWAYS',
                      padding:'20rpx',
                  },
                  longitude: _this.school[s].lng,
                  latitude: _this.school[s].lat,
                  width: 15,
                  height: 20
              };
          }
      })
    },
  data () {
    return {
      type: 2,//导航展示
      longitude: 116.39987458203123,
      latitude: 39.90915359502086,
      markers: [],
      school:[],
      nearnum:0,
    }
  },
  methods: {
    toyuyue(id){
      this.$location.navigate('/pages/sign_subscribe/main?id='+id);
    },
    backto(index = 1){
      this.$location.backto(index);
    },
    markertap (e) {
      this.$location.navigate('/pages/school_details/main?id='+e.mp.markerId);
    },
    todetail (id) {
      this.$location.navigate('/pages/school_details/main?id='+id);
    },
    tomap(lat,lng){
      this.latitude = lat;
      this.longitude = lng;
    }

  },
    components: {
      bottomnav
    }
}
</script>

