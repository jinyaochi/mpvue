<template>
    <div class="alert_back">
      <div class="alert_box">
        <p>已成功提交反馈<br/>感谢你的支持</p>
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
