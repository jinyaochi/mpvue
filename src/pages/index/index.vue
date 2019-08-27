<template>
  <div id="box">

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

      <cover-view class="controls">
        <cover-view class="time">00:00</cover-view>
      </cover-view>

    </map>

  </div>
</template>

<script>

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

  created () {
    // let app = getApp()
  }
}
</script>
<style>
  page,#box{
    height: 100%;
  }
  #map{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .controls {
    position: relative;
    top: 50%;
    height: 50px;
    margin-top: -25px;
    display: flex;
  }
  .play,.pause,.time {
    flex: 1;
    height: 100%;
  }
  .time {
    text-align: center;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    line-height: 50px;
  }
  .img {
    width: 40px;
    height: 40px;
    margin: 5px auto;
  }
</style>
