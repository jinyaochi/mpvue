<template>
  <div id="box">
  <div class="parent"></div>
    <map
            id="map"
            longitude="116.39987458203123"
            latitude="39.90915359502086"
            scale="14"
            :markers="markers"
            @markertap="markertap"
            :polyline="polyline"
            @begin="begin"
            show-location
    >

    </map>
    <div class="details-box">
      <div class="details-title title">
        <div class="title-center">距您5KM 共 3个分校</div>
      </div>

    <div class="details-content box-top">
      <ul class="map-shop">
        <li>
          <img src="/static/images/map-img.jpg" alt="">
          <div class="map-shop-font">
            <div>
              <h1>能动英语清河店</h1>
              <span>1.2km</span>
            </div>
            <p>北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室</p>
            <div class="details-botton">现在咨询</div>
            <div class="details-botton">预约体验</div>
          </div>
        </li>
        <li>
          <img src="/static/images/map-img.jpg" alt="">
          <div class="map-shop-font">
            <div>
              <h1>能动英语清河店</h1>
              <span>1.2km</span>
            </div>
            <p>北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室</p>
            <div class="details-botton">现在咨询</div>
            <div class="details-botton">预约体验</div>
          </div>
        </li>
        <li>
          <img src="/static/images/map-img.jpg" alt="">
          <div class="map-shop-font">
            <div>
              <h1>能动英语清河店</h1>
              <span>1.2km</span>
            </div>
            <p>北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室</p>
            <div class="details-botton">现在咨询</div>
            <div class="details-botton">预约体验</div>
          </div>
        </li>
        <li>
          <img src="/static/images/map-img.jpg" alt="">
          <div class="map-shop-font">
            <div>
              <h1>能动英语清河店</h1>
              <span>1.2km</span>
            </div>
            <p>北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室北京市海淀区杏石口路56号B座2层 201室</p>
            <div class="details-botton">现在咨询</div>
            <div class="details-botton">预约体验</div>
          </div>
        </li>
      </ul>
    </div>
    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/school_details.css';
  import '@/assets/css/map.css';

  import bottomnav from '@/components/footer.vue';


  export default {
  data () {
    return {
      markers: [{
        iconPath: '/static/images/jiantou.png',
        id: 0,
        callout: {
          content: '123123sd',
          display: 'ALWAYS'
        },
        longitude: 116.39987458203123,
        latitude: 39.90915359502086,
        width: 10,
        height: 10
      }],
      polyline: [{
        points: [{
          longitude: 116.39987458203123,
          latitude: 39.90915359502086
        }, {
          longitude: 116.42734040234373,
          latitude: 39.878598176249206
        }],
        color: '#FF00DD',
        width: 2,
        dottedLine: true
      }]
    }
  },
  methods: {

    begin ({timeStamp}) {
      console.log('innnn')
    },
    markertap (e) {
      console.log(e)
    }

  },
    components: {bottomnav

    },
  created () {
    // let app = getApp()
  }
}
</script>

