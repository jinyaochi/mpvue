<template>
  <div>
      <div class="parent" @click="backto"></div>
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
          <span @click="tojianjie">简介</span>
        </div>

        <div class="details-content">
          <div class="title">
            <p class="details-top">{{school.full_address}} {{school.location}}</p>
            <span><img class="details-img" src="https://api.nd115.com/static/images/details-pisition.png"  alt="" mode="aspectFill"></span>
            <button open-type="contact" class="details-botton2 details-botton-margin">现在咨询</button>
            <div class="details-botton details-botton-margin" @click="toyuyue">预约体验</div>
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
                    <span class="comment-img" @click="zanzan(item.id)"><img class="details-img2" :src="'https://api.nd115.com/static/images/details-zan'+(item.selfzan ? '2':'')+'.png'" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                    <span>{{item.zan}}</span>
                  </a>
                  <a href="">
                    <span class="comment-img"><img class="details-img2" src="https://api.nd115.com/static/images/details-more.png" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                    <span @click="showcomment(item.id,0,item.name)">回复</span>
                  </a>
                </div>
              </div>
            </li>

          </ul>
          <div class="is-none" style="height:25vh" v-if="comments.length == 0">
            <img class="is-none-img" src="https://api.nd115.com/static/images/write-none.png" mode="widthFix"/>
          </div>

        </div>
      </div>
    <div class="comment-inp">
      <input type="text" placeholder="我来说几句" placeholder-class="comment-inp-color" disabled @click="showcomment()">
    </div>
    <comment v-if="comment_show" :tips="tips"></comment>

  </div>
</template>

<script>
  import '@/assets/css/school_details.css';
  import comment from '@/components/comment.vue';

  export default {
  components: {
      comment
  },
  data () {
    return {
      tips: '',
      id: 0,
      comment_show: false,
      school: [],
      comments: [],
      reply_id: 0,
      parent_id: 0
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

    _this.$net.post({
      url: 'school/comments/'+_this.id,
      data: {
      }
    }).then(res => {
      _this.comments = res.data;
    })
  },
  methods: {
    toyuyue(){
        let _this = this;
        this.$location.navigate('/pages/sign_subscribe/main?id='+_this.id);
    },
    zanzan(cid = 0){
      let _this = this;
      _this.$net.post({
        url: 'school/comments/'+cid+'/zan',
        data: {
        }
      }).then(res => {
        _this.$net.post({
          url: 'school/comments/'+_this.id,
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
        url: 'school/comments/'+_this.id+'/create',
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
          url: 'school/comments/'+_this.id,
          data: {
          }
        }).then(res => {
          _this.comments = res.data;
        })
      })
    },
    backto(index = 1){
      this.$location.backto(index);
    },
    tojianjie(){
      let _this = this;
      _this.$location.navigate('/pages/school_synopsis/main?id='+_this.id);
    },
    showcomment(pid = 0,rid = 0,name = ''){
        this.tips = name ? '回复：' + name : '请输入评论内容';
        this.reply_id = rid;
        this.parent_id = pid;
        this.comment_show = true;
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

