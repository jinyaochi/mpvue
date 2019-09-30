<template>
  <div>
      <div class="parent" @click="backup"></div>
      <image style="width:100%;" :src="good.cover" class="slide-image" mode="widthFix"/>
      <div class="details-box2">
        <div class="details-title title">
          <p>{{good.name}}</p>
          <span @click="backup">关闭</span>
        </div>

        <div class="details-content">
          <div class="title">
            <p class="details-top">简介</p>
          </div>
          <div class="details-synopsis bb-1">{{good.intro}}</div>
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
      good: [],
    }
  },
    mounted(){
      let _this = this;
      _this.id = this.getQuery().id;

      _this.$net.post({
        url: 'goods/'+_this.id,
        data: {
        }
      }).then(res => {
        _this.good = res.data;
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

