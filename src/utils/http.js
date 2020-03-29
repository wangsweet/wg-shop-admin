import axios from 'axios'
import QS from 'qs'
import Vue from 'vue'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use(
    config => {
      Vue.prototype.$loading.show()
      const token = sessionStorage.token;       
      // token && (config.headers.Authorization = token);        
      return config;
    },
    error => {
      return Promise.reject(err);
    }
  );

  //响应拦截器即异常处理
  axios.interceptors.response.use(response => {
    // Vue.$loading.hide()
    Vue.prototype.$loading.hide()
    return response
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break;
        case 401:
          console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
  })


  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */

  export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
    })
  }


  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, QS.stringify(data))
        .then(response => {
          resolve(response.data);
          //resolve(response);
        }, err => {
          reject(err)
        })
    })
  }

  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
    })
  }

  /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
    })
  }


  /**
   * 下面是获取数据的接口
   */
  /** 
   * 测试接口
   * 名称：exam
   * 参数：paramObj/null
   * 方式：fetch/post/patch/put
   */
  export const server = {
    baseStatic: "https://bjskill.jushiwl.com/", //全局的静态图片资源路径
    exam: function (paramObj) {
      return post('/api.php?ac=v2_djList', paramObj);
    },
    demo1: (paramObj) => {
      return post('/api.php?ac=v2_djList', paramObj);
    },
    //   get_cart_list:(paramObj)=>{

    //       return fetch('auth_api/get_cart_list?token=token',paramObj);
    //   },
    // --------------------
    //首页

    login: (paramObj) => {
      return post('/login', paramObj);
    },
    hot:(paramObj)=>{
      return fetch('https://api.mtnhao.com/search/hot',paramObj)
    },
    search:(paramObj)=>{
      return fetch('https://api.mtnhao.com/search/suggest',paramObj)
    },
    songs:(paramObj)=>{
      return fetch('https://api.mtnhao.com/song/url',paramObj)
    },
    banner:(paramObj)=>{
      return fetch('https://api.mtnhao.com/banner?type=0',paramObj)
    },
    

  }

  
  // 解决sass
  // npm uninstall node-sass
// npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/