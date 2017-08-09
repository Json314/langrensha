<template lang="html">
  <tem :role="role" :playerCount="playerCount" :status="status"></tem>
</template>

<script>
  import tem from './Component.vue'
  export default {
    data(){
      return {
        role: [['村民', 'cunmin', 'min'], ['预言家', 'yuyanjia', 'shen'], ['狼人', 'langren', 'lang'], ['女巫', 'nvwu', 'shen'], ['狼人', 'langren', 'lang'], ['村民', 'cunmin', 'min'], ['猎人', 'lieren', 'shen'], ['狼人', 'langren', 'lang'], ['村民', 'cunmin', 'min']],
        playerCount: 9,
        status:{
          min: 3,
          shen: 3,
          lang: 3
        }
      }
    },
    components: {tem}
  }
</script>

<style lang="css">
</style>
