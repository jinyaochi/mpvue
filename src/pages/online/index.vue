<template>
  <div class="online">
    <div class="online-time time1">
      <div class="font">
        <div>
        <p>
            <span>第一期表音密码共10节</span>
        </p>
        <div class="felling">
          <a href=""><span>1.2w</span><span class="icon icon-white love"></span></a>
          <a href=""><span>1.4 </span><span class="icon icon-white good"></span></a>
          <a href=""><span>100</span><span class="icon icon-white look"></span></a>
        </div>
        </div>
      </div>
      <div class="box">
        <div class="one"></div>
        <div class="one-body"></div>
      </div>
    </div>
    <div class="online-time time2">
      <div class="font">
        <div>
        <p>
          <span>第一期表音密码共10节</span>
        </p>
        <div class="felling">
          <a href=""><span>1.2w</span><span class="icon icon-white love"></span></a>
          <a href=""><span>1.4 </span><span class="icon icon-white good"></span></a>
          <a href=""><span>100</span><span class="icon icon-white look"></span></a>
        </div>
        </div>
      </div>
      <div class="box">
        <div class="one"></div>
        <div class="one-body"></div>
      </div>
    </div>
    <div class="online-time time3">
      <div class="font">
        <div>
        <p>
            <span>第一期表音密码共10节</span>
        </p>
        <div class="felling">
          <a href=""><span>1.2w</span><span class="icon icon-white love"></span></a>
          <a href=""><span>1.4 </span><span class="icon icon-white good"></span></a>
          <a href=""><span>100</span><span class="icon icon-white look"></span></a>
        </div>
        </div>
      </div>
      <div class="box">
        <div class="one"></div>
        <div class="one-body"></div>
      </div>
    </div>
      <bottomnav></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/online.css';
  import '@/assets/css/index.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  data () {
    return {

    }
  },
  methods: {

  },

  created () {
    let app = getApp();
      this.$net.post({
          url: 'category',
          data: {}
      }).then(res => {

      })
  },
  components: {
      bottomnav
  },
}
</script>

