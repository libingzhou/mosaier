<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './views/head';
import Botton from './views/botton';


export default {
  components:{
    Head,
    Botton,
  },
  watch: {
    $route:function(to,from){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style>
  @import "./css/reset.css";
  @import "./css/index.css";
</style>

