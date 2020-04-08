<!--  -->
<template>
<el-header>
  <!-- <div class="head-logo"> <img src="https://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png" alt=""> </div> -->
<div class="head-nav">
 <img class=head-logo src="@/assets/images/logo.png" alt="">
      
<el-menu :default-active="activeIndex" class="el-menu-demo" active-text-color="#ff9d00" mode="horizontal" @select="handleSelect">
   
 <el-menu-item index="1"> <a>首页</a></el-menu-item> 
<el-menu-item index="2">优选（Beta）</el-menu-item> 
 <el-menu-item index="3">租房</el-menu-item> 
  <el-menu-item index="4">分享小组</el-menu-item>
  <el-menu-item index="5" disabled>帮助中心</el-menu-item>
  <div class="head-search">
  <el-input size="small" v-model="inputSearch" placeholder="请输入内容"> 
    </el-input>
          <!-- <el-button class="searchbutton" style="margin:10px" size="mini" icon="el-icon-search" circle></el-button> -->
</div>

<div class="login-out">
<router-link to="/login" replace ><a v-if="!userInfo.username" style="color:rgb(255, 157, 0)">注册/登录</a></router-link> 
<router-link to="/my" ><a style="color:rgb(255, 157, 0)"> {{userInfo.username}}</a></router-link> 

</div>
</el-menu>
</div> 


</el-header>
</template>

<script>
import {mapState} from 'vuex'
  export default {
      name: 'Header',
    data() {
      return {
        inputSearch:'',
        activeIndex: '3',
      };
    },
    methods: {
        handleSelect(key, keyPath) {
          if(key==1){
            this.$router.push({path: '/'});
          }
          if(key==2){
           this.$router.push({path:'/special'})
          }
          if(key=="3"){
            this.$router.push({path: '/rent'});
          }
          if(key=="4"){
            this.$router.push({path: '/share'});
          }
        window.console.log(key, keyPath);
      }
     
    },computed:{
      ...mapState(['userInfo'])
    }

  }
</script>

<style>

.head-logo{
    position: relative;
    margin-left:100px;
    height: 60px;
    float: left;
    width: auto;
    z-index: 999
}
.head-nav{
      height: 50px;
    margin: 0 auto;
    _overflow: hidden;
    position: relative;
    z-index: 2;
}
.head-search{
  margin-right: 20px;
    float: left;
    width: 120px;
    position: relative;
}
.head-search input{
    width: 90px;
    height: 30px;
    margin-top: 10px;
    margin-left:30px;  
    font-size: 12px;
    color: white;
}
.searchbutton{
    float:left
}

.login-out{
float: right;
}
.login-out a{
    font-size: 14px;

    line-height: 50px;

}
.head-nav a{
  text-decoration: none;
}
  .router-link-active {
  text-decoration: none;
  }

</style>
