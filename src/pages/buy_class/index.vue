<template>
  <div>
    <div class="parent" @click="backto"></div>
    <div class="class-img">
      <img src="https://api.nd115.com/static/images/buy-img.jpg" width="100%" height="100%" mode="widthFix"/>
    </div>

    <div class="class-head">
      <div class="class-one">
        <div>
          <p class="center">{{category.name}}</p>
        </div>
      </div>
      <div class="class-two">
        <div>
          <p>{{category.price}}元/期</p>
          <a class="class-but" @click="mkorder">购买</a>
        </div>
      </div>

    </div>

    <div class="class-footer">
      <div>总计&nbsp;&nbsp;<span>{{category.price}}</span> 元</div>
      <div @click="mkorder">微信支付</div>
    </div>

  </div>

</template>

<script>
  import '@/assets/css/class_list.css';
  import '@/assets/css/buy_class.css';

  export default {
    onLoad(){
      var _this = this;
      _this.id = this.getQuery().cid;
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
        category:[],
      }
    },
    methods: {
      mkorder(){
        var _this = this;

        _this.$net.post({
          url: 'mkorder/'+_this.id,
          data: {}
        }).then(res => {

          let replyJson = JSON.parse(res.data.pay_info);

          wx.requestPayment({
            appId: replyJson.appId,
            timeStamp: replyJson.timeStamp,
            nonceStr: replyJson.nonceStr,
            package: replyJson.package,
            signType: replyJson.signType,
            paySign: replyJson.paySign,
            success: function(res) {
              wx.showToast({
                title: '购买成功',
                icon: 'none',
                duration: 2000
              })
              setTimeout(function () {
                wx.navigateTo({
                  url: '/pages/buy/main'
                })
              },2000);
              console.log(res)
            },
            fail: function(res) {
              console.log('付款失败')
              console.log(res)
            }
          })
        })
      },
      backto(){
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
      },
    }
  }

</script>
<style>








</style>
