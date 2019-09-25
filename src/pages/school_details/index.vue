<template>
  <div>
      <div class="parent"></div>
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <block v-for="(item, index) in school.images" :index="index" :key="key">
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
            <span><img class="details-img" src="http://admin.qq.im/static/images/details-pisition.png"  alt="" mode="aspectFill"></span>
            <button open-type="contact" class="details-botton details-botton-margin">现在咨询</button>
            <div class="details-botton details-botton-margin">预约体验</div>
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
                  <span>{{t.reply_name}}</span>
                  <span class="black">&nbsp;回复&nbsp;</span>
                  <span>{{t.name}}:</span>
                  <span>{{t.content}}</span>
                </div>

                <div class="comment-choose">
                  <a href="">
                    <span class="comment-img"><img class="details-img2" src="http://admin.qq.im/static/images/details-zan.png" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                    <span>0</span>
                  </a>
                  <a href="">
                    <span class="comment-img"><img class="details-img2" src="http://admin.qq.im/static/images/details-more.png" alt="" mode="aspectFill">&nbsp;&nbsp;</span>
                    <span>回复</span>
                  </a>
                </div>
              </div>
            </li>

          </ul>


        </div>
      </div>
    <div class="comment-inp">
      <input type="text" placeholder="我来说几句" placeholder-class="comment-inp-color" disabled @click="showcomment">
    </div>
    <comment v-if="comment_show"></comment>

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
    tijiao(content = ''){
        console.log(content);
    },
    tojianjie(){
      let _this = this;
      _this.$location.navigate('/pages/school_synopsis/main?id='+_this.id);
    },
    showcomment(pid = 0,rid = 0){
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

