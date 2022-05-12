<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
// import PublicSearch from "@/views/PublicSearch";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI);

export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  }

}
</script>

<style>

</style>
