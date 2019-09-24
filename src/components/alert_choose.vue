<template>
    <div class="alert_back">
      <div class="alert_box">
        <div>
          <p>确定删除收藏视频吗</p>
          <div class="choose">
            <div>取消</div>
            <div>确定</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '@/assets/css/alert_font.css';


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
