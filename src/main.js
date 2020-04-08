import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './plugins/element.js'
import router from './router'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 通过use方法加载axios插件
Vue.use(VueAxios,axios);
Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$layer = layer(Vue, {
  msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});