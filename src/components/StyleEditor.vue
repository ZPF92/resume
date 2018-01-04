<template>
  <div class="styleEditor" ref="container">
    <div class="code" v-html="codeInStyleTag"></div>
    <pre class="" v-html="highlightedCode"></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs';
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
  export default {
    name: 'Editor',
    computed: {
      ...mapState({
        codeInStyleTag:state => `<style>${state.currentStyle}</style>`,
        highlightedCode:state => Prism.highlight(state.currentStyle, Prism.languages.css)
      })
    }
  }
</script>

<style scoped>
  pre{
  }
  @media (max-width:500px){
    pre{
    }
  }
  .code {
    display: none;
  }
</style>