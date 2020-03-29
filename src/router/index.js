import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
Vue.use(Router)
//解决路由跳转Uncaught (in promise) undefined
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//初始登录页
const constantRoutes=[
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const createRouter = () => new Router({
  mode:"history",
  routes:constantRoutes})
  const router =createRouter()
//解决登出后重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
//导出路由

 export default router