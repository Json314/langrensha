<template lang="html">
  <tem :role="role" :playerCount="playerCount" :status="status"></tem>
</template>

<script>
  import tem from './Component.vue'
  export default {
    data(){
      return {
        role: [['猎人', 'lieren', 'shen'], ['狼人', 'langren', 'lang'], ['猎人', 'lieren', 'shen'], ['狼人', 'langren', 'lang'], ['猎人', 'lieren', 'shen'], ['狼人', 'langren', 'lang'], ['猎人', 'lieren', 'shen'], ['狼人', 'langren', 'lang'], ['猎人', 'lieren', 'shen'], ['猎人', 'lieren', 'shen']],
        playerCount: 10,
        status:{
          min: 1,   //没有民，因为判断胜利，民为0则狼人胜，所以给民赋值一个数
          shen: 6,
          lang: 4
        }
      }
    },
    components: {tem}
  }
</script>

<style lang="css">
</style>
