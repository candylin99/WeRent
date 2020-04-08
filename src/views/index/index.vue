<!--  -->
<template>
<div class="all" style="height:600px;">
<el-drawer style="color:white"
  title="优选（Beta）"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <selectview></selectview>
</el-drawer>

   <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link" style="position:fixed!important;top:60px;left:100px!important;z-index:1000;color:white">
    <i class="el-icon-menu" style="font-size: 20pt;"></i>
    
  </span>
  <el-dropdown-menu slot="dropdown" @command="router" >
    <el-dropdown-item >首页</el-dropdown-item>
    <el-dropdown-item @click.native="special">优选(Beta)</el-dropdown-item>
    <el-dropdown-item  @click.native="rent">租房</el-dropdown-item>
    <el-dropdown-item  @click.native="share">分享小组</el-dropdown-item>
    <el-dropdown-item disabled>帮助中心</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>



<el-row style="position:absolute!important">
  <div class="loginarea" v-if="!userInfo.username">
    <el-button @click.native="signIn" type="danger" plain>Sign in</el-button>
  <el-button type="danger" plain>Sign up</el-button>
   </div>
   <router-link to="/my" ><a style="color:rgb(255, 157, 0);margin-right:100px;text-decoration: none;"> {{userInfo.username}}</a></router-link> 

</el-row>

<div class="center">

<el-button id="first" type="warning" @click="drawer = true"  round>即刻选房（Beta）</el-button>
<el-button id="third" type="info" @click="rent" round>查看房源</el-button>
</div>

  <el-carousel :interval="5000" arrow="always" height="670px" direction="vertical" >
    <el-carousel-item v-for="item in indeximages" :key="item">
      <p id="slidetext" style="font-size:40px">{{item.text1}}</p>
      <p id="slidetext" style="font-size:20px;margin-top:100px;">{{item.text2}} </p>
      <img :src="item.img" alt="" style="height:100%;weight:auto">

    </el-carousel-item>
  </el-carousel>




</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import selectview from '@/components/selectview/index.vue'
import {mapState} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  selectview,
},

data() {
     
//这里存放数据
return {
   drawer: false,
   direction: 'btt',
   indeximages:[
        {img:require('../../assets/images/index0.jpg'),
         text1:"世间所有的相遇都是久别重逢",
         text2:"房客和房东都在彼此感动着"},
        {img:require('../../assets/images/index1.jpg'),
         text1:"住我家",
         text2:"莫愁前路无知己，天下谁人不识君"},
          {img:require('../../assets/images/index3.jpg'),
         text1:"让分享和信赖悄然发生",
         text2:"完善房源智能推，帮助房东和房客"},

      ],


};
},
//监听属性 类似于data概念
computed: {
        ...mapState(['userInfo'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
special(){ this.$router.push({path: '/special'}) },
share(){ this.$router.push({path: '/share'})},
rent(){ this.$router.push({path: '/special'}) },
signIn(){this.$router.push({path: '/login'})}
},


//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  
  

},


}
</script>
<style>


 #slidetext{
    left:-150px;
    top: 40%;
    color: #FFF;
    font-weight: 900;
    text-transform: uppercase;
    
    line-height: 120%;
    opacity: 0.9;
    -webkit-transform: translateX(500px);
    transform: translateX(500px);
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    z-index: 1000;
    position: fixed;

}

.center{
  position:fixed;
  top:62%;
  left:25%;
  z-index: 100; 
}

.el-dropdown {
  display: block!important;
}

.el-dropdown-menu{
transform-origin: 0!important;
position:fixed!important;
margin-top:110px!important;
left:100px!important;
z-index:1000;
}

.el-row {
    z-index: 1000;
    position: absolute!important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    right: 100px;
    top:50px;
}

.el-button {
    border: 0px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 10px;
}

.el-button--danger.is-plain {
    font-size: 13pt;
    background-color: transparent;
    color: white;
    background: 0;


}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-drawer__open .el-drawer.btt {
    width: 650px;
    height: 455px!important;
    margin: 0 auto;
    top: 90px;     
    background-color: grey;
    }


     .el-drawer__body{
       margin-top:-30px;
     }
     .el-drawer__header {
     margin-top:-12px;
     color: wheat;
     }

  
</style>