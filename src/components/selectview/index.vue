<template>
   <!-- wrapper-container -->
   <div class="wrapper-container">

     <!-- 这是左边 -->
      <div class="aside">
        <div class="aside-text">
          <!-- 这个content是用css写好的通用内容 -->
          <div class="content">
            <h5 class="p-h5">01</h5>
            <h1 class="p-h1">您想住的区域?</h1>
   <div style="margin-top: 20px">
    <el-radio-group v-model="radio1" size="mini">
      <el-radio-button label="荔湾"></el-radio-button>
      <el-radio-button label="越秀"></el-radio-button>
      <el-radio-button label="天河"></el-radio-button>
      <el-radio-button label="番禺"></el-radio-button>
      <el-radio-button label="花都"></el-radio-button>
       <el-radio-button label="都行"></el-radio-button>

    </el-radio-group>
  </div>


          </div>
        </div>
      </div>

      <!-- 这是右边 -->
      <div class="main">
        <!-- 这是右上 -->
        <div class="main-top">
            <div class="top-left">
              <div class="top-left-text">
                <!-- 这个content是用css写好的通用内容 -->
                <div class="content">
                  <h5 class="p-h5">02</h5>
                  <h1 class="p-h1">亲,您的预算是?</h1>
                 
                  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="small">
      <el-radio-button label="1000"></el-radio-button>
      <el-radio-button label="2000"></el-radio-button>
      <el-radio-button label="3000"  ></el-radio-button>
      <el-radio-button label="5000"></el-radio-button>
    </el-radio-group>

  </div>
                </div>
              </div>
            </div>
          <div class="top-blank"></div>
            <div class="top-right">
              <div class="top-right-text">
                <!-- 这个content是用css写好的通用内容 -->
                <div class="content">
                  <h5 class="p-h5">03</h5>
                  <h1 class="p-h1">您喜欢的户型?</h1>
 <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="1室"></el-radio-button>
      <el-radio-button label="2室"></el-radio-button>
      <el-radio-button label="3室"></el-radio-button>
      <el-radio-button label="都行"></el-radio-button>
    </el-radio-group>
                </div>
              </div>
            </div>
        </div>
        <!-- 这是右下 -->
        <!-- <div class="main-button-blank"></div> -->
        <div class="main-button">
          <div class="main-button-text">
            <!-- 这个content是用css写好的通用内容 -->
                <div class="content">
                  <h5 class="p-h5">02</h5>
                  <h1 class="p-h1">您喜欢的标签是?</h1>
                 <el-radio-group v-model="radio4" size="small">
      <el-radio-button label="近地铁"></el-radio-button>
      <el-radio-button label="精装"></el-radio-button>
      <el-radio-button label="公寓"></el-radio-button>
      <el-radio-button label="厨房"></el-radio-button>

    </el-radio-group>
  <button @click='Go'>提交</button>




                </div>
              </div>
          </div>
        </div>
      </div>
</template>


<script>
import {mapActions} from 'vuex'
import {reqSmartRentData} from '../../api'

export default {
  data() {
    return {
      radio1:'越秀',
      radio2:2000,
      radio3:'1室',
      radio4:''
}
  },
  methods:{
       ...mapActions(['getRentList']),

     async Go(){
      let result;
    let  selectpojo = {
        locationa:this.radio1,
        price:this.radio2,
        layout:this.radio3,
        tag:this.radio4,
        page:0
        }
  result = await reqSmartRentData(selectpojo)
     if(result.status===200){  
   this.getRentList(result.data.content);
   
  this.$router.push({name: 'rent',
  params:{
    sele : selectpojo,
  }
  }) 

}
}
  }
}
</script>

<style>

.el-radio-button__inner{
  background-color:transparent!important; 
  border-radius: 10px!important;
  line-height: 3px!important;
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #fff;
    background-color: #409eff!important;
    border-color: #409eff!important;
    box-shadow: -1px 0 0 0 #409eff!important;
}
.wrapper-container{
  height: 380px;
  width: 650px;
  
}
.aside{
  width: 200px;
  float: left;
  height: 380px;
  background: url(../../assets/images/aside.jpg) center;
}
.aside-text{
  margin: 70px 0px 0px 20px;
}
.main{
  float: right;
  width: 435px;
  height: 380px;
}
.main-top{
  height: 205px;
  width: 435px;
  float: left;
}
.top-left{
  width: 210px;
  height: 190px;
  float: left;
  background:url(../../assets/images/top-left.jpg);
  background-size:210px 200px;
}
.top-left-text{
   margin: 20px 0px 0px 20px;
}
.top-left-text .content{
  width: 200px;
}
.top-blank{
width: 16px;
height: 190px;
float: left;
}
.top-right{
  width: 209px;
  height: 190px;
  float: left;
  background:url(http://images.gaga.me/photos2/2018/0126/5a6b4c83cd63b.jpeg);
  background-size:250px 200px;
}
.top-right-text{
   margin: 20px 0px 0px 20px;
}
.main-button-blank{
  width: 850px;
  float: left;
  height: 20px;
  
}
.main-button{
  width: 435px;
  height: 175px;
  float: left;
  background:url(../../assets/images/main-button.jpg) center top;
  background-size: 435px 175px;
}
.main-button-text{
  margin: 20px 0px 0px 20px;
}
.main-button-text .content{
  width: 800px;
  height: 100px;
}
/* 随意标准一个content大小,需要的时候自行调节 */
.content{
  width: 200px;
  height: 200px;
}
.content span{
  height: 18px;
  float: left;
  color:white;
  /* background-color: white; */
  border-radius: 7px;
  border: 0.5px solid white;
  margin:0px 10px 10px 0px;
  padding:0px 5px;
  text-align: center;
  font-size: 12px;
}
.content span:hover{
  color: #444647;
  background-color: white;
}
/* 把h1和h5定死 */
 .p-h1{
  font-size: 18px;
  color: aliceblue;
  margin-bottom: 20px;
  
}
 .p-h5{
  font-size: 32px;
  color: aliceblue;
  margin-bottom: 10px;
  margin-top: 10px;
}
/* content标准的内容结束 */
</style>
