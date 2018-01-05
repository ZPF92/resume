<template>
  <div id="app" style="font-size:16px;">
    <audio src="./static/bgm.mp3" autoplay="autoplay" loop="loop" ref="music"></audio>
    <StyleEditor></StyleEditor>
    <ResumeEditor></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor';
  import ResumeEditor from './components/ResumeEditor';
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    methods: {
      ...mapActions([
        'makeResume'
      ])
    },
    created(){
      this.makeResume(this);
    },
    mounted(){
      this.$refs.music.src = './static/bgm.mp3';
      this.$refs.music.play();
    }
  }
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }
  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>