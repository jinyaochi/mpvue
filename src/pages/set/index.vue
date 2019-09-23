<template>
  <div>
    <div class="set-head"></div>
    <ul class="set-box">
      <li>清除缓存</li>
      <li>退出登录</li>
    </ul>

    <bottomnav></bottomnav>
  </div>

</template>

<script>
  import '@/assets/css/index.css';
  import '@/assets/css/set.css';

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
          url: 'index',
          data: {}
      }).then(res => {

      })
  }
}

</script>
<style>








</style>
