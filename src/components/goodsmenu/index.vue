<template>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" active-text-color	="#ff9d00" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location" style="font-size: 14px;color:#666666;">香港 台湾 国内</i>
      <span slot="title"></span>
    </template>
    <el-menu-item-group>
          <div style="width:500px;">
       <div class="box" style="width:240px;float:left"  v-for="sort in sorts" :key="sort">
        <h2 class="bigtitle">{{sort.ptitle}}</h2>    
         <ul class="list" style="list-style:none;float:left;color:#636363;font-size:14px;">
          <li v-for="place in sort.places" :key="place"> {{place}}</li>
          
</ul>
</div>
          </div>
      <!-- <el-menu-item index="1-1">北海道</el-menu-item>
      <el-menu-item index="1-2">冰岛</el-menu-item>
      <el-menu-item index="1-3">澳大利亚</el-menu-item> -->
    </el-menu-item-group>
 
  </el-submenu>
  

</el-menu>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true,
        sorts:[{
            ptitle:"香港 澳门",
            places:["香港","澳门","香港迪士尼","交通接驳","澳门塔","摩天轮","新濠影汇","豪华自助"]
    },
      {  ptitle:"台湾",
            places:["香港","澳门","香港迪士尼","交通接驳","澳门塔","摩天轮","新濠影汇","豪华自助"]
    }, {  ptitle:"国内",
            places:["香港","澳门","香港迪士尼","交通接驳","澳门塔","摩天轮","新濠影汇","豪华自助"]
    }],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
        
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.bigtitle{
    border-bottom: 1px solid #ececec;
    margin-bottom: 12px;
    padding-top: 25px;
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    color: #323232;
    margin-left:30px;
}
.box li{
            list-style:none; /* 将默认的列表符号去掉 */
        padding:0; /* 将默认的内边距去掉 */
        margin:0; /* 将默认的外边距去掉 */
        float: left; /* 往左浮动 */
        display: block;
        margin-right:5px;
        margin-bottom:10px;

}
.box ul{
        display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.el-menu-item {
    height: 45px;
}
.el-menu-item i{
    font-size:14px!important;
    color:#666666;
}

  .el-menu--collapse{
    width: 259px;
    min-height: 400px;
  }
</style>