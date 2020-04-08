<template>
  <div class="home">
    
<div class="show-slider">
<el-carousel height="475px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in showimages" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img :src="item" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>
</div>

<el-container style="width:1050px;margin:0 auto;height: 1000px; border: 1px solid #eee">
    <el-aside width="300px">
<div class="asidebox" v-for="list in asidelist" :key="list">
<div class="asidebox-hd">
<h2 class="hd-title"> &ensp;{{list.title}}</h2>
</div>
<div class="asidebox-bd" style="height:300px" >
  <img :src="list.image" alt="">
<h3 style="color: #333;font-size:16px;font-weight:400;line-height: 1px;">{{list.ptitle}}</h3>
<p style="height: 60px;line-height: 20px;font-size: 14px;overflow: hidden;color:#666666;font-weight:300">{{list.content}}</p>
</div>
</div>
    </el-aside>
    <el-container>
  
    <el-main>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="热门游记" name="first">

      <div class="remen-list" v-for="list in remen" :key="list">
        <img :src=list.image>
     <router-link tag="a" target="_blank" :to="{name:'interview',params:{id:list.id}}">
 <div id="remenwrap">
        <dl>
          <dt style="color:#333;">{{list.title}}</dt>
       <div class="list-content"> <dd>{{list.content}}</dd> </div>
        </dl>
        <div class="extra">
          <span class="place">
            <i class="el-icon-location-information"></i>东京,
          </span>
          <span class="user">
<i class="el-icon-user"></i>By:llovky
          </span>
          <span class="nums"><i class="el-icon-view"></i> 522</span>
          <span class="ding">
          </span>
        </div>
         </div>
        </router-link>
      </div>

    </el-tab-pane>
    <el-tab-pane label="最新发表" name="second">
      最新发表
      </el-tab-pane>
  </el-tabs>

    </el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
      showimages:[
        "https://n2-q.mafengwo.net/s14/M00/A3/72/wKgE2l0bAz-AUqLVAAgd7dbvAMg911.jpg?imageMogr2%2Finterlace%2F1",
        "https://b2-q.mafengwo.net/s14/M00/2C/B4/wKgE2l0czFWAZCSiAAes8lIsP3I057.jpg?imageMogr2%2Finterlace%2F1",
        "https://b1-q.mafengwo.net/s14/M00/FB/5C/wKgE2l0VxGSAFPg0AAVbWqeaXt4000.jpg?imageMogr2%2Finterlace%2F1"
      ],
     activeName: 'first',
     remen:[
       {
         id:"12345679",
        title:"避开人流的小众路线，不上岛的千岛湖自驾游",
        url:"https://www.mafengwo.cn/i/14171859.html",
        image:"https://b1-q.mafengwo.net/s14/M00/95/DD/wKgE2l0TdYCAQXUGAAhJjKWHWwE324.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
        content:"一到节假日，或者寒暑假，经入住民宿老板推荐，我们选择了一条小众路线——不上岛，环 千岛湖 自驾游。本线路非常省钱。当地游不算火车票"

       },
        {
          id:"12345678",
        title:"初见日本--7天6夜东京箱根的惊鸿一瞥",
        url:"https://www.mafengwo.cn/i/13967472.html",
        image:"https://p3-q.mafengwo.net/s14/M00/9A/BD/wKgE2l0OEYuAcW5aAAeMwQq_B60519.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
        content:"日本 ，路途距离适中，风土人情浓厚，一直放置在我和翟先生的出行目的地清单里。阴错阳差，我和翟先生选择了五一，新皇登基 日本 史上最长连放🔟天假的时间，踏上霓虹国   。回想起来，当时房间几乎全部订满，我们还一通感慨这几年经济发展太快，霓虹国已被 中国 游客攻陷"

       },
     ],
     asidelist:[
       {
        title:"旅行家专栏",
        ptitle:"夏木尼，小王子的玫瑰城市",
        url:"https://www.mafengwo.cn/i/13967472.html",
        image:"https://b3-q.mafengwo.net/s13/M00/71/D6/wKgEaVyd7i6AFjCjAADni5x-vvY89.jpeg",
        content:"夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。"
       },
       {
         title:"旅游攻略推荐",
         ptitle:"超走心攻略，上海迪斯尼【别排队...",
        url:"https://www.mafengwo.cn/i/13967472.html",
        image:"https://b3-q.mafengwo.net/s14/M00/C3/51/wKgE2l0LooyAYjD7AAKrTDyp43s46.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100",
        content:""
       },
     ]
       
     

    }
  },
  components: {

  },
  methods:{
     handleClick(tab, event) {
        window.console.log(tab, event);
      }
  }
}
</script>

<style>
.list-content{
  height: 70px;
}
#remenwrap .extra{
   
    height: 33px;
    overflow: hidden;
    line-height: 33px;
    /* display: block; */
    /* bottom: 0px; */
    position: relative;
}
.extra span{
   font-size: 13px;
    color: #999;
}

dt{
    height: 26px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 26px;
    color:#333;
  
}
.asidebox-hd .hd-title {
    float: left;
    font-size: 18px;
    color: #333;
    font-weight: normal;
}
.asidebox-bd {
    width: 260px;
    height: 246px;
    overflow: hidden;
    position: relative;
}

.remen-list img{
    float: left;
    width: 220px;
    height: 150px;
    position: relative;
}
.remen-list dt a.tn-from-app+a {
    width: 360px;
}

.remen-list :hover dt a {
    color: #ff9d00;
    text-decoration: none;
}
.remen-list dt a {
    width: 420px;
    height: 26px;
    display: block;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.remen-list dd {
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
    margin: 10px 0 0 0;
    color:#666666;    
}
.remen-list{
      padding: 15px 0;
    height: 150px;
}
#remenwrap{
    float: right;
    width: 465px;
    height: 200px;
    margin-top: -20px;
}



.show-slider img{
    width: 100%;
    height: 475px;

}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  
  .el-tabs__item.is-top:hover{
    color:#ff9d00!important;
  }
 .el-tabs__item.is-active{
   color:#ff9d00;
 }
 .el-tabs__active-bar{
   background-color:#ff9d00;
 }
 .el-tabs__item{
   font-size: 18px;
    float: left;
    width: 150px;
    display: inline;
    text-align: center;
    margin-bottom:8px;
}
 
</style>
