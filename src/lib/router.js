//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//注册插件
Vue.use(VueRouter);

//导入路由管理组件
import login from '../components/login.vue'
import main from '../components/mian.vue'
//写规则
const routes = [
    { path: '/login', component: login },
    { path: '/', component: main }
  ]
//实例化对象
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
//暴露
export default router;