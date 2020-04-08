<template>
<el-container style="width:1000px;margin:0 auto;">
   <el-aside>
       <asidenav />
       <div class="asidebar" style="width:200px;">
<div class="asidebox" v-for="list in asidelist" :key="list">
<div class="asidebox-hd">
<h2 class="hd-title"> &ensp;{{  list.title}}</h2>
</div>
<div class="asidebox-bd" style="height:300px" >
  <img :src="list.image" alt="">
<h3 style="color: #333;font-size:16px;font-weight:400;line-height: 1px;">{{list.ptitle}}</h3>
<p style="height: 60px;line-height: 20px;font-size: 14px;overflow: hidden;color:#666666;font-weight:300">{{list.content}}</p>
</div>
</div>
       </div>
   </el-aside>
<div class="block" style="width:700px">
    <el-carousel height="350px" style="width:700px">
      <el-carousel-item v-for="item in carouse" :key="item">
          <el-image :src=item>
          </el-image>
      </el-carousel-item>
    </el-carousel>
<div class="cont-main">
    <div class="hd" style="    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 48px;">
        <h3 style="font-weight:300;font-size:20px;">推荐攻略</h3>
    </div>

    <div class="feed-item" v-for="list in feeds" :key="list">
        <div class="title" style="    margin-bottom: 15px;
    font-size: 20px;
    color: #333;">{{list.title}}}</div>
        <div class="text" style="margin-bottom: 15px;
    color: #666;font-size:14px;">{{list.text}}</div>
        <div class="img">
              <img v-for="img in list.imgs" :key="img" :src="img" style="width:220px;height:130px;margin-right:13px" >

        </div>
    </div>
</div>

  </div>


   </el-container>
</template>

<script>
import asidenav from "../../components/asidenav/index.vue";
export default {
    name:'gonglve',
    components:{
        asidenav
    },
    data(){
    return{
    carouse:[
    "https://pic.qyer.com/public/home/focus/2019/06/28/15616896102093",
    "https://b2-q.mafengwo.net/s14/M00/2C/B4/wKgE2l0czFWAZCSiAAes8lIsP3I057.jpg?imageMogr2%2Finterlace%2F1",
    "https://pic.qyer.com/public/home/focus/2019/06/28/15616899927961",
  
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
     ],
    feeds:[
        {

            title:"食游广州——广州美食大汇总",
            text:"到 广州 “叹”一顿正经八百的早茶，享受一下当地人的早茶文化。“叹者，长长地舒一口气之谓也，悠悠然淡定享受生活之谓也。”来羊城赴个早茶之约吧！",
            imgs:["http://p3-q.mafengwo.net/s12/M00/A2/8B/wKgED1utnM2AIM3mAAiGhryOn5Y79.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100",
            "http://b1-q.mafengwo.net/s12/M00/7C/B5/wKgED1uthDCAWZAPAA_OYl2gJLY23.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100",
            "http://b3-q.mafengwo.net/s12/M00/7C/B6/wKgED1uthDGAIMnpAAxfMrX0NLs17.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"]
        }
    ]
}
    }
}
</script>

<style>
.el-tabs__item{
    font-weight: 400;
    
}    
.el-tabs__content{
    font-weight: 400;
    
}    
.block img{
    width: 100%;
    height: 350px;

}

</style>
