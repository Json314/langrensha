<template lang="html">
  <tem :role="role" :playerCount="playerCount" :status="status"></tem>
</template>

<script>
  import tem from './Component.vue'
  export default {
    data(){
      return {
        role: [['村民', 'cunmin', 'min'], ['预言家', 'yuyanjia', 'shen'], ['狼人', 'langren', 'lang'], ['守卫', 'shouwei', 'shen'], ['狼人', 'langren', 'lang'], ['村民', 'cunmin', 'min']],
        playerCount: 6,
        status:{
          min: 2,
          shen: 2,
          lang: 2
        }
      }
    },
    components: {tem}
  }
</script>

<style lang="css">
</style>
