<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex';
  export default {
    name: 'ResumeEditor',
    computed:{
      ...mapState([
        'enableHtml'
      ]),
      ...mapGetters([
        'result'
      ]),
    }
  }
</script>

<style scoped>
  @media (max-width:500px){
    .resumeEditor{
    }
  }
  .htmlMode {
    animation: flip 2s;
  }
  @keyframes flip {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
