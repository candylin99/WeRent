
<template>
    <div style="width:1000px;margin:0 auto">

<el-container style="height:300px;">
        <el-aside width='320px' >
            <img src="https://b4-q.mafengwo.net/s14/M00/15/37/wKgE2l0hulGAOdO4AAIkbEOd7cw44.jpeg" 
            style="width:150px;height:auto;border-radius: 120px;margin-top:70px;margin-left:150px;" alt="" srcset="">
        </el-aside>
       <el-main>
        <div class="userheader">
            <div class="username">
        llovky
        </div>
        <ul>
            <li>10 帖子</li>
            <li>2910 粉丝</li>
            <li>正在关注 60</li>
        </ul>
        <div class="usersign">
            XXX
        </div>
        </div>
       </el-main>
</el-container>  
<el-header height="400px">
    
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="帖子" name="first">我的帖子</el-tab-pane>
    <el-tab-pane label="订单" name="second">订单页面</el-tab-pane>
    <el-tab-pane label="收藏" name="third">我的收藏</el-tab-pane>
    <el-tab-pane label="已标记" name="fourth">我的标记</el-tab-pane>
  </el-tabs>
</el-header>  
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
activeIndex:0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.userheader{
    font-weight: 300;
    margin-top:55px; 
    margin-left: 50px;
}
.username{
    font-size:25px;
}
.userheader ul{
    margin-left: -40px;
    display: flex;
    flex-direction: row;
}
.userheader li{
    list-style: none;
    font-weight: 400;
    margin-right:50px; 
    
}
.el-tabs__item{
    font-size:14px!important;
    width:110px;

}
.el-tabs .el-tabs__nav-wrap{
        padding-left:150px!important;

    font-size: 15px!important;
        display: flex!important;
    text-align: center;
    align-items: center;
    margin-left: 100px!important;
}
</style>