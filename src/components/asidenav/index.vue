<template>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" active-text-color	="#ff9d00" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location" style="font-size: 14px;color:#666666;">海外冬季目的地精选</i>
      <span slot="title"></span>
    </template>
    <el-menu-item-group>
      <span slot="title">海外游</span>
      <el-menu-item index="1-1">北海道</el-menu-item>
      <el-menu-item index="1-2">冰岛</el-menu-item>
      <el-menu-item index="1-3">澳大利亚</el-menu-item>
    </el-menu-item-group>
 
  </el-submenu>

  <el-submenu index="8">
    <template slot="title">
      <i class="el-icon-location" style="font-size: 14px;color:#666666;">海外冬季目的地精选</i>
      <span slot="title"></span>
    </template>
    <el-menu-item-group>
      <span slot="title">海外游</span>
      <el-menu-item index="1-1">aa</el-menu-item>
      <el-menu-item index="1-2">bb</el-menu-item>
      <el-menu-item index="1-3">澳大利亚</el-menu-item>
    </el-menu-item-group>
 
  </el-submenu>


  <el-menu-item index="2">
    <i class="el-icon-menu">国内冬季目的地精选</i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document">奔向海岛</i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting">主题推荐</i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true
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