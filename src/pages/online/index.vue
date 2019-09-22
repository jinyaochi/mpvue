<template>
  <div class="online">
    <div v-for="(item, index) in categorys" :class="'online-time time'+(index+1)">
      <div class="font">
        <div>
        <p>
            <span>第一期表音密码共10节</span>
        </p>
        <div class="felling">
          <a href=""><span>{{item.collect}}</span><span class="icon icon-white love"></span></a>
          <a href=""><span>{{item.zan}} </span><span class="icon icon-white good"></span></a>
          <a href=""><span>{{item.view}}</span><span class="icon icon-white look"></span></a>
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
        categorys : []
    }
  },
  methods: {

  },

  created () {
      var _this = this;
    let app = getApp();
      this.$net.post({
          url: 'category',
          data: {}
      }).then(res => {
          _this.categorys = res.data;
          console.log(_this.categorys);
      })
  },
  components: {
      bottomnav
  },
}
</script>

