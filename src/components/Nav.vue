<template lang="html">
  <div class="nav">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple Number_6 active" @click="choiceGameTye('/number_6',$event)">6人暗杀</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light Home Number_9" @click="choiceGameTye('/number_9',$event)">9人暗杀</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light Number_10" @click="choiceGameTye('/number_10',$event)">10人</div></el-col>
    </el-row>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'nav',
    methods: {
      choiceGameTye(url,event){
        $('.nav .grid-content').removeClass('active');
        $(event.target).addClass('active');
        this.$router.push(url);
      }
    },
    mounted(to, from, next){
      $('.nav .grid-content').removeClass('active');
      $('.'+this.$route.name).addClass('active');
    }
  }
</script>

<style lang="scss" scope>
  .nav{
    margin-bottom: 30px;
  }
  .grid-content{
    padding: 10px;
  }
  .nav .grid-content{
    font-weight: 800;
  }
  .nav .active.grid-content{
    border-bottom: 2px solid #20a0ff;
    color: #20a0ff;
  }
</style>
