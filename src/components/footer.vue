<template>
    <div>
      <!-- 底部 -->
      <div style="height:116rpx"></div>
      <div class="nav">
        <ul class="navContainer bt-1">
          <li :class="type == 1 ? 'footer-choose' : ''">
            <a @click="redirect('/pages/index/main')">
              <i class="footerIcon find"></i>
              <div>发现</div>
            </a>
          </li>
          <li :class="type == 2 ? 'footer-choose' : ''">
            <a @click="redirect('/pages/map/main')">
              <i class="footerIcon lineDown"></i>
              <div>线下试听</div>
            </a>
          </li>
          <li :class="type == 3 ? 'footer-choose' : ''">
            <a @click="redirect('/pages/online/main')">
              <i class="footerIcon lineUp"></i>
              <div>线上课程</div>
            </a>
          </li>
          <li :class="type == 4 ? 'footer-choose' : ''">
            <a @click="redirect('/pages/mine/main')">
              <i class="footerIcon mine"></i>
              <div>我的</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import '@/assets/css/footer.css';
  export default {
    props:['type'],
    name: "footer",
    data:{

    },
    methods: {
      redirect(url){
        this.$location.rediect(url)
      }
    }
  };
</script>
