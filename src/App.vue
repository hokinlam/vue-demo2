<template>
  <div id="app">
    <loading v-if='showLoading'></loading>
    <NavHeader v-show='showHeader'></NavHeader>
    <transition name='slide-down'><router-view ></router-view></transition>
    <FooterView></FooterView>
  </div>
</template>

<script>

import NavHeader from "./components/Nav.vue";
import FooterView from "./components/Footer.vue";
import {mapGetters} from 'vuex'



export default {
  name: 'app',
  components:{
    NavHeader,
    FooterView,
 
  },
  computed:
    mapGetters([
      'showHeader','showLoading'
    ]),
  watch:{
    $route(to){
        if(to.path == '/user-info'){
          this.$store.dispatch('hideHeader')  
        }else{
          this.$store.dispatch('showHeader') 
        }
    }
  }
}

</script>

<style>
  .slide-down-enter,.slide-down-leave {
    opacity : 1
  }
  .slide-down-enter-active,.slide-down-leave-active {
    transition : .3s all ease;
    opacity : 0.5;
    transform : translate3d(0,3em,0)
  }
</style>