import Toast from './Toast.vue'

const obj={}


obj.install=function(Vue){
// 1. 创建组件构造器
const toastCoutrustor=Vue.extend(Toast)

 // 2. new  组件实例
const toast=new toastCoutrustor()

// 3. 将组件实例， 挂载到某一个元素上
toast.$mount(document.createElement('div'))

// 4. toast.$el 对应的就是div
document.body.appendChild(toast.$el);

// 5. 添加到原型链上
Vue.prototype.$toast = toast

}

export default obj
