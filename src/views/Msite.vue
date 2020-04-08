<template>
  <div>
    <!-- banner 有banner-logo和nav-box-->
    <div class="banner">
      <h3 class="banner-logo">
        <img src="https://s.yzfcdn.com/assets/img/pc/client/home/zf_banner-text.png" alt="">
      </h3>
     
    </div>
    
    <div class="guess-header-mudoule">
      <div class="guess-header">
          <p>热门推荐</p>
          <div class="guess-content" style="margin-top: 25px;">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="padding-left: 0px!important;">
              <el-tab-pane label="广州" name="first" ><tag :city="广州"  :sele=sele ></tag></el-tab-pane>
              
            </el-tabs>
         </div>
       </div>
     </div>

        
      <!-- inner用来规定板块 -->
      <div class="inner-control-moudel"> 
        <div class="inner">
              <!-- <tag></tag> -->
          </div>
       </div>
      
    </div>

</template>

<script>
import search from '../components/search/search.vue'
import tag from '../components/tag/tag.vue'
export default {
  data() {
    return {
      input:'',
      activeName:'first',
      currentPage:1, //初始页
      pagesize:9,    //    每页的数据
      userList: [],
      activeIndex: '3',

      sele:this.$route.params.sele,

    }
  },
  methods: {
    handleClick(){
    
    },
    handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
    
  },
  components:{
    search,tag
  }
}
</script>
<style>
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FF9D00;
    color: #FFFFFF;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color:#FF9D00;
}
.el-tabs__active-bar {
    background-color: #FF9D00!important;
}
  
  .el-row{
    position: relative!important;
  }
 .banner{
   background: url(../assets/images/rentcenter.png) repeat-x top center;
   height: 210px;
   width: 100%;
   padding-top: 150px; 
   margin-bottom:30px; 
   font-family: "微软雅黑";
   color:#666;
 }
 .banner-logo{
   /* background-color: pink; */
   height: 100px;
 }
  .banner h3{
    width: 536px;
    height: 102px;
    margin: 0 auto;
 }
 .nav-box{
   border-radius: 10px;
   background-color:rgba(255,255,255,0.9);
   height: 260px;
   width: 700px;
   margin: 40px auto 0;
   padding: 20px;
 }
 .nav-box .nav-item{
   height: 100px;
   width: 350px;
   float: left;
 }
 .nav-box .nav-item img{
   width: 35px;
   height: 35px;
   border-radius: 100%;
   float: left;

 }
 .nav-box .nav-item .nav-block{
   margin-left: 10px;
   width: 240px;
   height: 80px;
   float: left;
   padding: 10px 0;

 }
 .nav-item span{
   font-size: 20px;
 }
 .nav-item .nav-contant{
   padding-top: 5px;
   font-size: 13px;
   
 }
 .nav-item .nav-contant a{
   padding-right:5px;
   text-decoration:none;
   color: #948892;
 }
 .nav-item .nav-contant a:hover{
   color: rgb(213, 230, 235);
 }
 .control{
   border-top:0.5px solid #B7B2AF;
   padding: 20px 40px;
  float: left;
  height: 50px;
 }
 /* 下面有请inner出场 */
 .inner{
    width: 1000px;
    height: 1000px;
    background-color: #f1f2f3;
 }
.inner-control-moudel{
  height: 1000px;
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
  height: 100px;
  margin: 0% auto;
  line-height: 20px;

 }
 .guess-header-mudoule .el-row-model{
       margin-left: 150px!important;
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
/* 下面是element的控制布局的 */
  .adrr{
    float: left;
  }
  .price{
    float: right;
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
  .guess-header .el-tabs .el-tabs__nav-wrap{
  padding-left: 0px !important;
   margin-left:0px !important;
}
.el-tabs__item.is-top:hover{
      color: #fff;
}



  
</style>
