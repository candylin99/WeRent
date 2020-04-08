<template>
   <div class="nav-search">
              <el-input v-model="input" placeholder="请输入区域、地点或公寓名称"></el-input>
              <el-button type="danger">开始找房</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input:''
    }
  },
}
</script>

<style>
.nav-search{
   height: 100px;
   margin-top:1px solid  #666;
   float: left;
   margin: auto 0;
 }
  .nav-search .el-input{ 
    width: 500px;
    float: left;
  }
  .nav-search .el-button{
    float: left;
  }
</style>
