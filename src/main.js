// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { Message } from 'element-ui'
Vue.prototype.$message = Message   //ElementUI的提示信息
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';//ElementUIcss
require('./mock') //mock模拟
import { server } from './utils/http' //封装请求
Vue.prototype.$server = server 
import './style/base.css'  //全局css

import store from './store' //vuex

Vue.config.productionTip = false
import NProgress from 'nprogress' //加载进度条 
import 'nprogress/nprogress.css'//加载进度条css

import { powerRouter,relaxRouter} from './router/demo/index'  //异步路由与404路由
import {newArrruter} from './utils/filters'  // 过滤路由的方法

import echarts from "echarts"//可视化工具
Vue.prototype.$echarts = echarts//可视化工具
import 'lib-flexible'  //适配窗口

import Toast from '../src/components/components/index' //提示组件
import Loading from '../src/components/Loading/index'//加载组件

Vue.use(Toast)
Vue.use(Loading)

// NProgress.configure({     
//   easing: 'ease',  // 动画方式    
//   speed: 500,  // 递增进度条的速度    
//   showSpinner: false, // 是否显示加载ico    
//   trickleSpeed: 200, // 自动递增间隔    
//   minimum: 0.3 // 初始化时的最小百分比
// })

router.beforeEach((to, from, next) => {
  NProgress.start()  //路由加载进度条开始
  if (store.getters.token && store.getters.role) {
    if (store.getters.newrouter.length !== 0) {
      next()
    }else{
      let newrouter
      if(store.getters.role=='A'){
        newrouter=powerRouter //最高权限所以路由表
      }else{
        newrouter=newArrruter(powerRouter,store.getters.role)  //做权限过滤后的路由表
      }
      let Allnewrouter=[...newrouter,...relaxRouter] //将权限路由与404整合
      router.addRoutes(Allnewrouter) //加载到路由里
      
      store.dispatch("Role",newrouter).then((res)=>{

        next({...to})
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    
   
  } else {
    if (to.path == '/login') {

      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to,from,next) => {  
  NProgress.done() //路由加载进度条结束
  var routerList = to.matched
  store.commit('setCrumbList', routerList) // 面包屑
  store.commit('SET_CURRENT_MENU', to.path)//当打开选中menu
  

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
