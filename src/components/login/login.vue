<template>

 <div class="login-container">
    <div class="login-box">
      <div class="inner_v2_top">
        <div class="login">
          <div class="clear_float">
            <el-input v-model="account" placeholder="account" style="width:314px;margin-bottom:20px;"></el-input>
            <el-input v-model="password" placeholder="password" style="width:314px;" show-password></el-input>
          </div>
          <div class="forget_reg">
              <a href="#" class="reg">Register</a>
              <a href="#" class="forg">Forget</a>
            </div>
          <el-button type="warning"  style="width:314px;height:40px;">Login</el-button>
        </div>

        <div class="login_2">
            <ul>
              <li><a href="#"><i class="iconfont icon-qq"></i></a></li>
              <li></li>
              <li><a href="#"><i class="iconfont icon-weibo"></i></a></li>
              <li></li>
              <li style="position: relative;"><a href="#" class="wx"><i class="iconfont icon-logo-wechat"></i></a></li>
            </ul>
          </div>

       </div>
    </div>

 </div>
</template>
data() {
  return {
    account:''
    password:''
  }
},
props:{
  "drawerLogin":boolean,
}
<script>
export default {
}
</script>

<style scoped>

.login-container{
  margin :0 auto;
}
.login-container .el-input{
  width :320px;
  height :42px;
  float:left;
}
.login-box{
  width:600px;
}
.inner_v2_top{
  width:365px;
}
.inner_v2_top .login{
  margin:25px;
}
 .forget_reg{
  width:314px;
  height:50px;
  line-height: 50px;
}
.forget_reg a{
  color : #ffa800;
  font-size : 12px;
  /* margin:5px; */
}
.forget_reg .reg{
  float:left;
}
.forget_reg .forg{
  float:right;
}

.clear_float{
  overflow:hidden;
}
.login_2 li{
  list-style:none;
  height:50px;
  width:50px;
  float:left;
  margin: 0 5px;
}
.login_2 a{
  color:fff;
  text-decoration:none;
}
.login_2 i:hover{
  color:#E6A23C;
}
.login_2 .wx{
  position: absolute;
  top:-2px;
}
.login .el-input__inner:hover{
  border: #E6A23C;
}
</style>
