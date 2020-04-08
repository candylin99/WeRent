<!--  -->
<template>
<div>
    <img :src=ilist.image style="width:100%;height:auto;" >
<el-container style="width:1000px;margin:0 auto">

    <el-aside width="700px">
        <h3>{{ilist.title   }}</h3>
  <div v-html="ilist.content"> </div>    
    </el-aside>
    <el-main>
        <h1>2</h1>
    </el-main>
</el-container>
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
    ilist:
        {
            blogId:"12345678",
            image:"https://p3-q.mafengwo.net/s14/M00/BA/17/wKgE2lz7ZCiAFoYqAAmEZDvF6-Q44.jpeg?imageMogr2%2Fstrip",
            title:"初见日本--7天6夜东京箱根的惊鸿一瞥",
            content:"<a>初见日本--7天6夜东京箱根的惊鸿一瞥</a>",
            tags:"国际游",
            username:"陈楚琪Sue💓 (佛山) ",
            userPic:"https://b4-q.mafengwo.net/s11/M00/B5/26/wKgBEFsiPfuAJV_DAADxtR05YRA41.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
        },
   

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
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style >

</style>