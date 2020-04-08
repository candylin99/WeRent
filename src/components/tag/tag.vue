<template>
 <div> 
   <div v-if= "city='广州'">
<!-- 控制竖排有两个 -->
<div>


</div>
    <el-row :gutter="20" style="margin-left:150px;">
      <!-- 控制横排有三个 -->
      <el-col :span="8" v-for="list in lists" :key="list.productId" style="margin-bottom:20px;height:350px;"> 
        <!-- 这里把data里面的数据取出来放页面里去 -->
          <div class="grid-content bg-purple" >
            <div class="inner-img">
              <img :src="'https://images.weserv.nl/?url='+list.productIcon" alt="" width="200px" height="50px">
            </div>
            <div class="inner-info">
              <p><a class="name" :href="'https://'+list.productLink" target="_blank">{{list.productName}}</a></p>
              <div class="info-content" style="font-size:14px;margin-top:5px;">
                <span class="adrr" style="padding-bottom:07px;">[<a href="" class="link">{{list.desLocationa}}</a>]{{list.desLocationb}}</span>
                <span>{{list.desArea}},{{list.desLayout}}</span>
            <span class="tag" style="    width: 250px;float: left;"> {{list.desTag}} </span>
                <p class="price" style="color:orange">￥{{list.productPrice}}</p>
              </div>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
  <el-pagination style="margin-left:32%;margin-top:30px;"
  @current-change="handleCurrentChange"
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>

</div>
</template>

<script>
import {mapState} from 'vuex'
import {reqSmartRentData} from '../../api'

export default { 
  props:['sele'], 
  data() {
    return {
      lists:{},
      selectpojo:this.sele,
    }
  },
methods: {
  async handleCurrentChange(val){
    let result;
    var selectpojo =this.selectpojo;
    selectpojo.page=val-1
  result = await reqSmartRentData(selectpojo);
  window.console.log(result.data.content);
    this.lists=(result.data.content);

},
}, 
computed:{
    ...mapState(['houseinfo']),
  
  },

  mounted(){
   this.lists=this.houseinfo;
}, 
}

</script>

<style>
/* 下面是element的控制布局的 */
  .adrr{
    float: left;
  }
  .price{
    width: 300px;
    float:left!important;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* border-radius: 4px; */
    min-height: 300px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .guess-content  p{
    margin: 0px;
  }
  .el-tabs .el-tabs__nav-wrap{
  padding-left: 0px !important;
   margin-left:0px !important;
}
.el-tabs__item.is-top:hover{
      color: #fff;
}
/* 下面是用来控制elementui的组件样式 */
 
 .el-tabs__header{
   background-color: #fff;
 }
 .el-tabs__item.is-active{
   color: #666;
   font-family: "微软雅黑";
 }
 .el-tabs__active-bar{
   background-color: red;
 }
 .el-tabs__nav-wrap::after{
   background-color: #fff;
 }
 /* 下面有请inner出场 */
 .inner{

   padding-bottom:20px;
    width: 1000px;
    overflow: hidden;
    background-color: #f1f2f3;
 }
.inner-control-moudel{
  padding-bottom:200px;
  overflow:hidden;
  background-color: #f1f2f3;
  padding-top: 40px;
}

 .inner-info{
   margin-top:-30px;
   line-height: 20px;
   font-size: 16px;
   font-family: 微软雅黑;
   height: 52px;
   /* background: pink; */
   float: left;
   width: 288px;
   padding: 1em;
   color:  #666;
 }
 .name{
   text-decoration:none;
   color:  #666;
 }
 .name:hover{
   color: rgb(213, 230, 235);
 }
  .link{
   text-decoration:none;
   color:  #666;
 }
 .link:hover{
    color: rgb(213, 230, 235);
 }

 .guess-header-mudoule{
   width: 1000px;
  height: 180px;
  margin: 0% auto;
  line-height: 100px;

 }
 .guess-header{
   width: 1000px;
   background-color: #fff;
   font-size: 20px;
 }
.inner-img{
  height: 215px;
  float: left;
  width: 100%;
}
.el-row-model{
  margin-bottom: 20px;
}
</style>
