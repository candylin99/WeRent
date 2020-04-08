<!--  -->
<template>
<div class='special' style="height:100%">
<el-container>
<el-header>

<i class="el-icon-arrow-left" @click="goBack" style="position:fixed!important;top:60px;left:100px!important;z-index:1000;color:white;font-size:24px;font-weight: 800;"> </i>

<div  class="asidearea" style="margin-top:35px;">
          <p class="heada" style="color:#1E5EEC;margin-left:200px;font-size:17px;height:0px">优选（Beta）</p>
        <div style="float:left;color:white;margin-left:200px;font-size:22px;font-weight:600;margin-top:-10px"><p>小家伙 更快 更聪明</p>
        <p style="margin-top:-20px">大数据引擎演算更适合房源</p></div>
        <div style="margin-top:30px;float:right;color:white;margin-right:200px;">  <el-button style="border-color: #353C58!important;margin-right:50px;background-color: #101A36;border: 1px;border-style: solid;" round>View all</el-button>
            <i style="margin-right:20px;font-size:22px;border-style: solid;border-radius: 20px;border-width: thin;" class="el-icon-back"></i>
            <i style="margin-right:50px;font-size:22px;border-style: solid;border-radius: 20px;border-width: thin;"  class="el-icon-right"></i>
             </div>
</div>
</el-header>


 <el-carousel :interval="4000" type="card" height="400px" style="top:80px;width:90%;margin:0 auto;">
    <el-carousel-item v-for="list in urls" :key="list">
        <el-image style="left: 100px;width: 200px;z-index: 1000;top: 100px;position: fixed;display: inline-block;" :src="'https://images.weserv.nl/?url='+list.productIcon"> </el-image>
       <a :href="'https://'+list.productLink" target="_blank"><img id="bigimg" :src="'https://images.weserv.nl/?url='+list.productIcon"  alt=""></a> 
        <div class="intro" style="color:white;z-index:1000;position: fixed;top: 150px;margin-left:340px">
          <div class="block">
            
    <el-button type="danger" style="left: 30px;position: fixed;top: 35px;" >订阅</el-button>

  <el-rate
    style="height:3px;"
    v-model="value2"
    :colors="colors">
  </el-rate>

</div >
       <div class="bl">
          <p id="a" style="font-size:22px;font-weight:700;height:16px">广州·{{list.desLocationa}} 丨 from ${{list.productPrice}}</p>
          <p id="b" style="font-size:15px;font-weight:300;color:white;height:05px;font-weight:600">{{list.productName}} </p>
          <p id="c" style="font-size:15px;font-weight:300;color:white;font-weight:600;">{{list.desTag}}</p>
           </div>
        </div>
          <!-- <el-image :src=url lazy>1</el-image> -->
    </el-carousel-item>
  </el-carousel>


<img style="z-index:1000;margin:77px 20px 20px 60px;width:700px;padding-left:250px" :src=footimg>








</el-container>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {reqSpecial} from '../../api'
import {mapState} from 'vuex'

export default {
  
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
footimg:require('../../assets/images/sp_foot.png'),
value1: null,
        value2: 4,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
urls: {},
username:''
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
      goBack() {
        this.$router.go(-1);
        window.onsole.log('go back');
      },
async getData(){
       
      let result;
      let username
      let sub={
      openid:null,
      nums:0}
      if(this.username=="llovky"){
      sub.openid=1     
        result= await reqSpecial(sub)
      this.urls=result.data.content; 
      }
      if(this.username=="Jerry"){
       sub.openid=2,
       sub.nums=3
      result= await reqSpecial(sub)
      this.urls=result.data.content;
    }
     
    
    }
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.username=this.userInfo.username;
  this.getData();

},

}
</script>
<style scroped>
#bigimg{
filter: blur(3px);
  }
.bl p{
color:white;
  }
.special{
    width: 100%;
    height:800px;
    margin:0 auto;
    background-color: #121937;
}
.special .el-carousel__item{
  width:660px!important;
  border-radius: 07px;

}
el-page-header p{
    color:white;
    font-size: 20px;
}
.asidearea  button{
  color: white;
  border-color: gray;
}
</style>