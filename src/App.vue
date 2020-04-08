<template>
  <div id="app">
    <toubu v-if="excludeRoutes.indexOf($route.name) == -1" ></toubu>

 
    <router-view/>



  <Footer v-if="excludeRoutes.indexOf($route.name) == -1"></Footer>

    
  </div>
</template>

<script>
// @ is an alias to /src
import toubu from '@/components/header/index.vue'

import Footer from '@/components/footer/index.vue'

export default {
  name:'app',
  components: {
   toubu,
    Footer,
  },
    data () {
    return {
      excludeRoutes: ['index', 'MyOrder', 'MyShoppingCart','special'],
      excludeHeadRoutes: ['index', 'MyOrder',]
    };
  },

  mounted(){

        window.addEventListener("unload",this.saveLoginUser);

},
  methods:{
    saveLoginUser(){
    //  sessionStorage.setItem('userInfo',JSON.stringify(this.$store.state.userInfo));

    }
  }

}

</script>

<style>
body{
  margin: 0;
}
</style>
