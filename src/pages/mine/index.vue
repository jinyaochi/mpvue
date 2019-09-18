<template>
  <div>
    <div class="head-top">
      <div>
        <img src="/static/images/head-img1.png" alt="">
        <p>我是郭德纲</p>
      </div>
    </div>
    <ul class="mine-choose">
      <li>
        <a href="">
          <img src="/static/images/mine-img1.png" alt="">我的收藏
        </a>
      </li>
      <li>
        <a href="">
          <img src="/static/images/mine-img2.png" alt="">我的购买
        </a>
      </li>
      <li>
        <a href="">
          <img src="/static/images/mine-img3.png" alt="">联系客服
        </a>
      </li>
      <li>
        <a href="">
          <img src="/static/images/mine-img4.png" alt="">我的二维码
        </a>
      </li>
      <li>
        <a href="">
          <img src="/static/images/mine-img5.png" alt="">设置
        </a>
      </li>
    </ul>

    <bottomnav></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/mine.css';
  import bottomnav from '@/components/footer.vue';


  export default {

    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      bottomnav
    },
    created () {
      // let app = getApp()
    }
  }
</script>

