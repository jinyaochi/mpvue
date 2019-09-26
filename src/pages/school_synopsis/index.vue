<template>
  <div>
      <div class="parent" @click="backup"></div>
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in school.images2" :index="index" :key="key">
              <swiper-item>
                  <image style="width:100%;" :src="item" class="slide-image" mode="widthFix"/>
              </swiper-item>
          </block>
      </swiper>
      <div class="details-box2">
        <div class="details-title title">
          <p>{{school.name}}</p>
          <span @click="backup">关闭</span>
        </div>

        <div class="details-content">
          <div class="title">
            <p class="details-top">校区简介</p>
          </div>
          <div class="details-synopsis bb-1">{{school.intro}}</div>
        </div>



      </div>
  </div>
</template>

<script>
  import '@/assets/css/school_details.css';

  export default {
  data () {
    return {
      id: 0,
      school: [],
    }
  },
    mounted(){
      let _this = this;
      _this.id = this.getQuery().id;

      _this.$net.post({
        url: 'school/show/'+_this.id,
        data: {
        }
      }).then(res => {
        _this.school = res.data;
      })
    },
  methods: {
    backup(){
      wx.navigateBack({
        delta: 1
      })
    },
    getQuery() {
      /* 获取当前路由栈数组 */
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const options = currentPage.options
      return options
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

