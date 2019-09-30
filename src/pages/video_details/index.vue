<template>
  <div>
    <div class="parent" @click="backto"></div>
    <!--- 苹果x适配 ----->
    <div class="tab-footer" :class="{'isIphoneX-class': isIphoneX}"></div>
    <!---------------->
    <div class="video_top"></div>
    <video id="myvideo" class="video_box" :src="goods.video" :poster="goods.cover" @timeupdate="videorun" @play="startrun" controls></video >
    <div class="inContainer video_blue">
    <p>{{goods.intro}}</p>
    <span>简介</span>
  </div>
    <div class="inContainer">
      <div class="clearfix">
        <div class="font">
            <a @click="tocollect"><span>{{goods.collect}}</span><span :class="'icon love ' + (goods.selfcollect ? '' :'icon_no')"></span></a>
            <a @click="tozan" href=""><span>{{goods.zan}}</span><span :class="'icon good ' + (goods.selfzan ? '' :'icon_no')"></span></a>
            <a href=""><span>{{goods.view}}</span><span class="icon look"></span></a>
        </div>
        <div class="head-img" style="position: relative;">
          <button open-type="share" style="position: absolute; top:0; left: 0;right: 0;bottom: 0; opacity: 0;"></button>
          <img src="/static/images/video-share.png" mode="widthFix" alt="">
        </div>
      </div>
      <div class="video_head">
        <img v-for="item in goods.viewer" :key="key" :src="item.cover" alt="">
      </div>


      <ul class="details-comment">

        <li v-for="(item,index) in comments" :key="key">
          <img :src="item.cover" mode="widthFix" alt="">
          <div class="comment-box">
            <div class="comment-title">
              <h2>{{item.name}}</h2>
              <span>{{item.created_at}}</span>
            </div>
            <p class="comment-content">
              {{item.content}}
            </p>

            <div v-for="(t,i) in item.son" :key="k" class="comment-reply">
              <span>{{t.name}}</span>
              <span v-if="t.reply_name" class="black">&nbsp;回复&nbsp;</span>
              <span><span v-if="t.reply_name">{{t.name}}</span>：</span>
              <span>{{t.content}}</span>
            </div>

            <div class="comment-choose">
              <a href="">
                <span class="comment-img" @click="zanzan(item.id)"><img class="details-img2" :src="'http://admin.qq.im/static/images/details-zan'+(item.selfzan ? '2':'')+'.png'" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                <span>{{item.zan}}</span>
              </a>
              <a href="">
                <span class="comment-img"><img class="details-img2" src="http://admin.qq.im/static/images/details-more.png" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                <span @click="showcomment(item.id,0,item.name)">回复</span>
              </a>
            </div>
          </div>
        </li>

      </ul>

      <div class="is-none" style="height:25vh" v-if="comments.length == 0">
        <img class="is-none-img" src="http://admin.qq.im/static/images/write-none.png" mode="widthFix"/>
      </div>

      <div style="height: 110rpx"></div>
      <div class="comment-inp2">
        <input type="text" placeholder="我来说几句" placeholder-class="comment-inp-color" disabled @click="showcomment()">
      </div>
    </div>

    <comment v-if="comment_show" :tips="tips"></comment>

  </div>

</template>

<script>
  import '@/assets/css/video_details.css';
  import comment from '@/components/comment.vue';

  export default {
      components: {
          comment
      },
      onLoad(){
          var _this = this;
          _this.id = this.getQuery().id;
          this.$net.post({
              url: 'goods/'+_this.id,
              data: {}
          }).then(res => {
              _this.goods = res.data;
          })

          _this.$net.post({
              url: 'goods/comments/'+_this.id,
              data: {
              }
          }).then(res => {
              _this.comments = res.data;
          })
        this.videoCtx = wx.createVideoContext('myvideo', this)


      },
      data () {
          return {
              tips: '',
              id: 0,
              comment_show: false,
              comments: [],
              goods:[],
              isIphoneX: this.globalData.isIphoneX //适配iphonex
          }
      },
      methods: {
        backto(){
          wx.navigateBack({
            delta: 1
          })
        },
          tozan(){
              let _this = this;
              _this.$net.post({
                  url: 'goods/zan/'+_this.id,
                  data: {
                  }
              }).then(res => {
                  this.$net.post({
                      url: 'goods/'+_this.id,
                      data: {}
                  }).then(res => {
                      _this.goods.selfcollect = res.data.selfcollect;
                      _this.goods.selfzan = res.data.selfzan;
                      _this.goods.zan = res.data.zan;
                      _this.goods.collect = res.data.collect;
                  })
              })
          },
          tocollect(){
              let _this = this;
              _this.$net.post({
                  url: 'goods/collect/'+_this.id,
                  data: {
                  }
              }).then(res => {
                  this.$net.post({
                      url: 'goods/'+_this.id,
                      data: {}
                  }).then(res => {
                      _this.goods.selfcollect = res.data.selfcollect;
                      _this.goods.selfzan = res.data.selfzan;
                      _this.goods.zan = res.data.zan;
                      _this.goods.collect = res.data.collect;
                  })
              })
          },
          zanzan(cid = 0){
              let _this = this;
              _this.$net.post({
                  url: 'goods/comments/'+cid+'/zan',
                  data: {
                  }
              }).then(res => {
                  _this.$net.post({
                      url: 'goods/comments/'+_this.id,
                      data: {
                      }
                  }).then(res => {
                      _this.comments = res.data;
                  })
              })
          },
          tijiao(content = ''){

              let _this = this;
              _this.$net.post({
                  url: 'goods/comments/'+_this.id+'/create',
                  data: {
                      content: content,
                      parent_id: _this.parent_id,
                      reply_id: _this.reply_id,
                  }
              }).then(res => {

                  if(!res.status){
                      return wx.showToast({
                          title: res.info,
                          icon: 'none',
                          duration: 2000
                      })
                  }

                  this.comment_show = false;

                  _this.$net.post({
                      url: 'goods/comments/'+_this.id,
                      data: {
                      }
                  }).then(res => {
                      _this.comments = res.data;
                  })
              })
          },
          getQuery() {
              /* 获取当前路由栈数组 */
              const pages = getCurrentPages()
              const currentPage = pages[pages.length - 1]
              const options = currentPage.options
              return options
          },
          videorun(event){
              this.startrun(event.mp.detail.currentTime);
          },
          startrun(time = null){
              var _this = this;
              if(time && time > 60*5){

                if(_this.goods.pay == '付费'){
                  //判断是否付费
                  _this.videoCtx.pause();
                  return wx.showModal({
                    title: '提示',
                    content: '尚未购买确定购买吗',
                    success(res) {

                    }
                  })
                }else{
                  //判断是否分享
                  if(!mpvue.getStorageSync('share_'+_this.goods.id)){
                    _this.videoCtx.pause();
                    return wx.showModal({
                      title: '提示',
                      content: '需要分享才可以观看哦',
                      success(res) {

                      }
                    })
                  }
                }

              }

          },
          showcomment(pid = 0,rid = 0,name = ''){
              this.tips = name ? '回复：' + name : '请输入评论内容';
              this.reply_id = rid;
              this.parent_id = pid;
              this.comment_show = true;
          },
      },
      onShareAppMessage(options){
          var that = this;

          var shareObj = {
              title: that.goods.name,
              path: '/pages/video_details/main?id='+that.goods.id,
              imageUrl: that.goods.cover,
              success(){
                mpvue.setStorageSync('share_'+that.goods.id, 1)
              },
          };
          return shareObj;
      }
  }

</script>
<style>
  .isIphoneX-class {
    padding-top:64rpx;
    background: #000;
  }

</style>
