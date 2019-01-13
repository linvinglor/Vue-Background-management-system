import Vue from 'vue'
import App from './App.vue'
//导入basscss
import './assets/base.css'
//导入ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//导入axios的插件
import VueAxios  from './lib/vue-axios';
Vue.use(VueAxios);
//导入路由插件
import router from './lib/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
