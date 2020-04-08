<!--  -->
<template>
<div class=fullscreen>
    <div class="wrapper">
          <remote-css href="https://css.mafengwo.net/css/cv/css+login+login_v2:mobile+css+omc+login-omc+login-omc%5EZlY%5E1550829726.css"></remote-css>
        <div class="container container-login">
            <a href="http://www.mafengwo.cn" title="返回首页" class="logo">马蜂窝</a>
            <div class="signup-forms flip">
                <div class="signup-box" id="_j_signup_box">
                    <div class="inner inner_v2 clearfix" style="height:440px!important;">
                        <div class="inner_v2_left">
                                                                                    <form action="/regist/" method="post" id="_j_signup_form">
                                <input type="hidden" name="token" value="112b1d2171458387f9d924f8d3180952" />
                                <div class="form-field">
                                    <input name="passport" type="text" placeholder="您的手机号码" autocomplete="off" data-type="mobile"
                                           data-verification-name="手机号码" class="verification[required,maxSize[50],custom[mobile]]" value="" />
                                                                        <div class="err-tip"></div>
                                </div>
                                
                                <div class="submit-btn">
                                    <button type="submit">立即注册</button>
                                </div>
                            </form>
                            <div class="agreement">
                                注册视为同意<a target="_blank" href="http://www.mafengwo.cn/s/agreement.html">《马蜂窝用户使用协议》</a>
                            </div>
                            <div class="connect">
    <p class="hd">用合作网站账户直接登录</p>
    <div class="bd">
        <a href="/weibo" class="weibo"><i></i>新浪微博</a>
        <a href="/qq" class="qq"><i></i>QQ</a>
        <a href="/wechat" class="weixin"><i></i>微信</a>
        <div class="clear"></div>
    </div>
</div>                        </div>
                        <div class="inner_v2_right">
                            <img src="https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg">
                            <p>扫一扫<br>下载马蜂窝APP</p>
                        </div>
                    </div>
                    <div class="bottom-link">
                        已经注册?<a href="#">马上登录</a>
                    </div>
                </div>
                <div class="login-box" id="_j_login_box">
                    <div class="inner inner_v2 clearfix" style="height:400px!important">
                        <div class="inner_v2_left">
                                                                                    <form :model="formLogin"  id="_j_login_form">
                                <div class="form-field">
                                    <input  type="text" placeholder="您的邮箱/手机号" autocomplete="off"
                                           data-verification-name="帐号" class="verification[required,maxSize[50],funcCall[checkShowCode]]" v-model="formLogin.username" />
                                    <div class="err-tip"></div>
                                </div>
                                <div class="form-field">
                                    <input type="password" placeholder="您的密码" autocomplete="off"
                                           data-verification-name="密码" class="verification[required,minSize[4],maxSize[50]]" v-model="formLogin.password" />
                                    <div class="err-tip"></div>
                                    <div class="msgtext">{{msg}}</div>
                                </div>
                                <div class="form-link"><a href="/forget">忘记密码</a></div>
                                <div class="submit-btn">
                                    <button id="_js_loginBtn" @click="login" >登 录</button>
                                </div>
                            </form>
                            <div class="connect">
    <p class="hd">用合作网站账户直接登录</p>
    <div class="bd">
        <a href="/weibo" class="weibo"><i></i>新浪微博</a>
        <a href="/qq" class="qq"><i></i>QQ</a>
        <a href="/wechat" class="weixin"><i></i>微信</a>
        <div class="clear"></div>
    </div>
</div>                        </div>
                        <div class="inner_v2_right">
                            <img src="https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg">
                            <p>扫一扫<br>下载马蜂窝APP</p>
                        </div>
                    </div>
                    <div class="bottom-link">
                        还没有帐号?<a href="#">马上注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapActions} from 'vuex'
import {reqPwdLogin} from '../../api'
export default {

components: {
     'remote-css': {
            render(createElement) {            
              return createElement('link', { attrs: { rel: 'stylesheet', href: this.href }});
            },
            props: {
            href: { type: String, required: true },
            },
     }
},
data() {
//这里存放数据
return {

    formLogin:{
          username: '',
          password: '',
        },
        msg:'',

};
},
methods:{
   ...mapActions(['userLogin']),

 async login(){
        let result
   let user = this.formLogin;       
    let username = {
        username:user.username,
        password:user.password
    }
    let password = 'admin'
    result=await reqPwdLogin(username);
    if(result.status===200){
              this.userLogin(username);
              window.alert("登陆成功")
               window.console.log("登陆成功")
              this.$router.push('/')

    }else{
        window.console.log(result.status)
        this.msg="用户名或密码或网络错误！"
    }
},

 }
}
</script>

<style>
.msgtext{
    clear: both;
    width: 320px;
    margin: 0 auto;
    padding: 8px 0 0;
    text-align: center;
    margin-bottom: -10px;
    color: red;
    font-size: 14px;

}
.fullscreen{
    margin-top:2px;
    width: 100%;
    height: 100%;
    min-width: 960px;
    min-height: 765px;
        background: url("https://fes.qyerstatic.com/fe_ssr_passport/ecb39528d488b6c520f7ddd3898379d6.jpg")top/cover no-repeat;
}
body { 
    background-color: white!important;
}

.inner inner_v2{
    height:440px!important;
}
</style>

