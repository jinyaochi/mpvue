<template>
  <div class="inp-black">
    <div class="inp-box">
      <div class="inp-top">
        校区评论
        <span @click="quxiao">取消</span>
        <span @click="tijiao">提交</span>
      </div>
      <textarea fixed="true" v-model="commentword" :placeholder="tips" class="inp-input" cols="2"rows="6" cursor-spacing='240'></textarea>

    </div>
  </div>
</template>

<script>
  import '@/assets/css/comment.css';
  export default {
    props:['tips'],
    data:{
          commentword:''
      },
      methods:{
          quxiao(){
              this.$parent.comment_show = false;
          },
          tijiao(){
              this.$parent.tijiao(this.commentword);
          }
      }
  };
</script>
