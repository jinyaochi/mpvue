<template>
  <div class="online">
    <div v-for="(item, index) in categorys" :class="'online-time time'+(index+1)">
      <div class="font">
        <div @click="togoodslist(item.id)">
        <p>
            <span>{{item.name}}</span>
        </p>
        <div class="felling mt-10">
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

      <bottomnav :type="type"></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/online.css';
  import '@/assets/css/index.css';
  import bottomnav from '@/components/footer.vue';

  export default {
  onLoad(){
    var _this = this;
    this.$net.post({
      url: 'category',
      data: {}
    }).then(res => {
      _this.categorys = res.data;
    })

  },
  data () {
    return {
      categorys : [],
      type:3
    }
  },
  methods: {
      togoodslist(id){
          this.$location.navigate('/pages/class_list/main?id='+id);
      }
  },
  components: {
      bottomnav
  },
}
</script>

