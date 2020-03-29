import Loading from './Loading.vue'

const obj = {}


obj.install = function (Vue) {
  const toadingCoutrustor = Vue.extend(Loading)

  const loading = new toadingCoutrustor()

  loading.$mount(document.createElement("div"))

  document.body.appendChild(loading.$el)
  Vue.prototype.$loading = loading
}

export default obj
