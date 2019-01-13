//导入axiios
import axios from 'axios';

//设置基地址
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'

//暴露 vue的 插件 axios
export default {
    //传入vue
    install(Vue){
        //添加实例的方法
        Vue.prototype.$axios=axios;
    }
}